"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle,
  CardFooter 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  Activity, 
  ArrowLeft,
  AlertTriangle,
  FileText,
  Database,
  Settings,
  BarChart,
  Calendar,
  Info,
  Download,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Copy,
  Cpu,
  FileJson,
  Globe,
  HardDrive,
  UploadCloud,
  DownloadCloud,
  Server,
  Table,
  Maximize,
  Zap,
  Filter,
  PieChart,
  RefreshCw,
  Share2
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ActivityRun {
  activityRunId: string;
  activityName: string;
  activityType: string;
  activityRunStart: string;
  activityRunEnd: string;
  durationInMs: number;
  status: string;
  error: {
    errorCode: string;
    message: string;
    failureType: string;
    target: string;
    details: string;
  };
  input: any;
  output: any;
  linkedServiceName: string;
  userProperties: any;
  pipelineName: string;
  pipelineRunId: string;
  executionDetails: {
    integrationRuntime: {
      name: string;
      type: string;
      location: string;
      nodes: any;
    }[];
  };
}

interface PipelineRun {
  id: string;
  runId: string;
  pipelineName: string;
  runStatus: string;
  duration: string;
  startTime: string;
  endTime: string;
  dataVolume: string;
  triggerType: string;
  failureReason: string | null;
  parameters: any;
  createdAt: string;
}

interface PipelineDetail {
  id: string;
  name: string;
  type: string;
  etag: string;
  lastPublishTime: string;
  policy: any;
  annotations: any[];
  activities: ActivityRun[];
}

export default function PipelineDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [pipeline, setPipeline] = useState<PipelineDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activityRuns, setActivityRuns] = useState<ActivityRun[]>([]);
  const [activeTab, setActiveTab] = useState("overview");
  const [error, setError] = useState<string | null>(null);
  const [pipeline_name, setName] = useState<String>("");
  const [expandedActivityId, setExpandedActivityId] = useState<string | null>(null);

  useEffect(() => {
    console.log(params.id);
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Fetch all pipeline runs
        const response = await fetch('/api/pipeline-runs');
        if (!response.ok) throw new Error("Failed to fetch pipeline data");
        
        const allRuns = await response.json();

        console.log(allRuns.data);
        
        // Find the pipeline with matching ID
        const pipelineRun = allRuns.data.find((run: PipelineRun) => run.runId === params.id);
        for(let i=0; i<allRuns.data.length; i++){
          if(allRuns.data[i].runId === params.id){
            setName(allRuns.data[i].pipelineName);
          }
        }
        
        if (!pipelineRun) {
          throw new Error(`Pipeline with ID ${params.id} not found`);
        }
  
        const activitiesResponse = await fetch(
          `/api/activity-runs/${params.id}`
        );
        
        if (!activitiesResponse.ok) {
          throw new Error("Failed to fetch activity runs");
        }
        
        const activitiesData = await activitiesResponse.json();
        console.log(activitiesData);
        setActivityRuns(activitiesData.value || []);

        // Transform the run data into your PipelineDetail format 
        const pipelineDetail: PipelineDetail = {
          id: pipelineRun.id,
          name: pipelineRun.pipelineName,
          type: "Data Pipeline",
          etag: pipelineRun.runId || "",
          lastPublishTime: pipelineRun.createdAt,
          policy: {
            triggerType: pipelineRun.triggerType || "N/A",
            dataVolume: pipelineRun.dataVolume || "N/A",
            failureReason: pipelineRun.failureReason,
            parameters: pipelineRun.parameters || {}
          },
          annotations: [],
          activities: activitiesData.value || []
        };

        setPipeline(pipelineDetail);
      } catch (err) {
        console.error("Failed to fetch pipeline:", err);
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  const formatDate = (dateString: string): string => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleString();
  };

  const formatDuration = (ms: number): string => {
    if (!ms) return "N/A";
    
    const seconds = Math.floor(ms / 1000);
    if (seconds < 60) return `${seconds} seconds`;
    
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    if (minutes < 60) {
      return `${minutes}m ${remainingSeconds}s`;
    }
    
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    
    return `${hours}h ${remainingMinutes}m ${remainingSeconds}s`;
  };

  const getStatusIcon = (status: string) => {
    switch (status?.toLowerCase()) {
      case "succeeded":
        return <CheckCircle className="h-5 w-5 text-emerald-500" />;
      case "failed":
        return <XCircle className="h-5 w-5 text-rose-500" />;
      case "running":
        return <RefreshCw className="h-5 w-5 text-sky-500 animate-spin" />;
      case "queued":
        return <Clock className="h-5 w-5 text-amber-500" />;
      default:
        return <Activity className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case "succeeded":
        return "bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-200";
      case "failed":
        return "bg-rose-100 text-rose-800 border-rose-200 hover:bg-rose-200";
      case "running":
      case "inprogress":
        return "bg-sky-100 text-sky-800 border-sky-200 hover:bg-sky-200";
      case "queued":
        return "bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200";
    }
  };

  const getActivityIcon = (activityType: string) => {
    const iconClass = "h-8 w-8 p-1 rounded-md";
    
    switch (activityType?.toLowerCase()) {
      case "copy":
        return <Copy className={`${iconClass} bg-blue-100 text-blue-600`} />;
      case "databricks notebook":
        return <FileText className={`${iconClass} bg-purple-100 text-purple-600`} />;
      case "databricks jar":
        return <HardDrive className={`${iconClass} bg-purple-100 text-purple-600`} />;
      case "databricks python":
        return <FileJson className={`${iconClass} bg-purple-100 text-purple-600`} />;
      case "dataflow":
        return <Share2 className={`${iconClass} bg-green-100 text-green-600`} />;
      case "execute pipeline":
        return <RefreshCw className={`${iconClass} bg-teal-100 text-teal-600`} />;
      case "lookup":
        return <Filter className={`${iconClass} bg-amber-100 text-amber-600`} />;
      case "get metadata":
        return <Database className={`${iconClass} bg-gray-100 text-gray-600`} />;
      case "web":
        return <Globe className={`${iconClass} bg-indigo-100 text-indigo-600`} />;
      case "filter":
        return <Filter className={`${iconClass} bg-yellow-100 text-yellow-600`} />;
      case "sql server stored procedure":
        return <Server className={`${iconClass} bg-red-100 text-red-600`} />;
      case "azure function":
        return <Zap className={`${iconClass} bg-indigo-100 text-indigo-600`} />;
      case "until":
      case "foreach":
      case "ifcondition":
        return <PieChart className={`${iconClass} bg-yellow-100 text-yellow-600`} />;
      case "delete":
        return <XCircle className={`${iconClass} bg-rose-100 text-rose-600`} />;
      default:
        if (activityType?.toLowerCase().includes("data")) {
          return <Database className={`${iconClass} bg-blue-100 text-blue-600`} />;
        }
        if (activityType?.toLowerCase().includes("sql")) {
          return <Table className={`${iconClass} bg-red-100 text-red-600`} />;
        }
        if (activityType?.toLowerCase().includes("blob") || activityType?.toLowerCase().includes("storage")) {
          return <HardDrive className={`${iconClass} bg-teal-100 text-teal-600`} />;
        }
        return <Settings className={`${iconClass} bg-gray-100 text-gray-600`} />;
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-slate-50 to-gray-100">
        <div className="text-center p-8">
          <div className="flex justify-center items-center mb-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-4 border-blue-100 animate-pulse"></div>
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-blue-600 rounded-full animate-spin"></div>
            </div>
          </div>
          <h2 className="text-xl font-semibold text-gray-700 mt-4">Loading Pipeline Details</h2>
          <p className="text-gray-500 mt-2">Retrieving run information and activities...</p>
        </div>
      </div>
    );
  }

  if (error || !pipeline) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-slate-50 to-gray-100">
        <div className="text-center p-8 bg-rose-50 rounded-lg max-w-md w-full shadow-lg border border-rose-200">
          <AlertTriangle className="h-16 w-16 text-rose-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-rose-700">Pipeline Not Found</h2>
          <p className="mt-4 mb-6 text-rose-600">
            {error || "The requested pipeline could not be found or might have been deleted."}
          </p>
          <Button 
            onClick={() => router.push('/dashboard')}
            className="mt-4 bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-md shadow-md transition-all"
          >
            <ArrowLeft className="h-5 w-5 mr-2" /> Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  // Find the primary activity or use the first one
  const primaryActivity = pipeline.activities.length > 0 ? pipeline.activities[0] : null;
  var cur_status = "succeeded";
  for (let i=0; i<pipeline.activities.length; i++){
      if(pipeline.activities[i]?.status === "Queued") {
        cur_status = "queued";
      }
      if(pipeline.activities[i]?.status === "Failed"){
        cur_status = "failed";
        break;
      }
  }
  const mainStatus = cur_status;
  
  // Calculate total data processed
  const totalDataRead = pipeline.activities.reduce((sum, activity) => 
    sum + (activity.output?.dataRead || 0), 0);
  
  const totalDataWritten = pipeline.activities.reduce((sum, activity) => 
    sum + (activity.output?.dataWritten || 0), 0);
  
  const toggleExpandActivity = (id: string) => {
    if (expandedActivityId === id) {
      setExpandedActivityId(null);
    } else {
      setExpandedActivityId(id);
    }
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 to-gray-100 min-h-screen">
      {/* Hero Header Section */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center">
              <Button 
                variant="outline" 
                onClick={() => router.back()}
                size="sm"
                className="bg-white hover:bg-gray-50 border-gray-200 shadow-sm mr-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" /> Back
              </Button>
              
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold text-gray-800">{pipeline_name}</h1>
                  <Badge className={`${getStatusColor(mainStatus)} px-3 py-1`}>
                    {getStatusIcon(mainStatus)}
                    <span className="ml-1">{mainStatus}</span>
                  </Badge>
                </div>
                <p className="text-gray-500 text-sm mt-1">
                  Run ID: <span className="font-mono">{pipeline.etag.substring(0, 8)}...</span> | 
                  Started: {primaryActivity ? formatDate(primaryActivity.activityRunStart) : "N/A"}
                </p>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm"
                className="bg-white hover:bg-gray-50 border-gray-200 shadow-sm"
              >
                <Download className="h-4 w-4 mr-2" /> Export
              </Button>
              <Button 
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
              >
                <RefreshCw className="h-4 w-4 mr-2" /> Refresh
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-6 px-4">
        {/* Status Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-blue-500">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">Pipeline Duration</p>
                  <h3 className="text-2xl font-bold mt-1">
                    {primaryActivity ? formatDuration(primaryActivity.durationInMs) : "N/A"}
                  </h3>
                </div>
                <Clock className="h-10 w-10 text-blue-500 bg-blue-50 p-2 rounded-lg" />
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                <div 
                  className="bg-blue-500 h-2 rounded-full" 
                  style={{ width: '100%' }}
                ></div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-emerald-500">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">Activity Completion</p>
                  <h3 className="text-2xl font-bold mt-1">
                    {pipeline.activities.filter(a => a.status?.toLowerCase() === "succeeded").length} of {pipeline.activities.length}
                  </h3>
                </div>
                <CheckCircle className="h-10 w-10 text-emerald-500 bg-emerald-50 p-2 rounded-lg" />
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                <div 
                  className="bg-emerald-500 h-2 rounded-full" 
                  style={{ width: `${(pipeline.activities.filter(a => a.status?.toLowerCase() === "succeeded").length / pipeline.activities.length) * 100}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-amber-500">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">Data Processed</p>
                  <h3 className="text-2xl font-bold mt-1">
                    {totalDataRead > 0 ? `${(totalDataRead / 1024).toFixed(2)} KB` : "N/A"}
                  </h3>
                </div>
                <Database className="h-10 w-10 text-amber-500 bg-amber-50 p-2 rounded-lg" />
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-3">
                <span>Read: {(totalDataRead / 1024).toFixed(2)} KB</span>
                <span>Written: {(totalDataWritten / 1024).toFixed(2)} KB</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div 
                  className="bg-amber-500 h-2 rounded-full" 
                  style={{ width: totalDataRead > 0 ? '100%' : '0%' }}
                ></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Status Message */}
        {mainStatus?.toLowerCase() === "failed" && primaryActivity && primaryActivity.error && (
          <div className="mb-6 p-4 bg-rose-50 border border-rose-200 rounded-lg shadow-sm animate-pulse">
            <div className="flex items-start">
              <AlertTriangle className="h-8 w-8 text-rose-500 mr-3 mt-0.5" />
              <div>
                <h4 className="font-semibold text-rose-700 text-lg">Pipeline Failed</h4>
                <p className="text-rose-600 mt-1">
                  {primaryActivity.error.message || "An error occurred during pipeline execution."}
                </p>
                {primaryActivity.error.failureType && (
                  <div className="mt-2 text-sm text-rose-600">
                    <span className="font-medium">Failure Type:</span> {primaryActivity.error.failureType}
                  </div>
                )}
                <Button 
                  variant="outline" 
                  size="sm"
                  className="mt-3 border-rose-300 bg-rose-100 hover:bg-rose-200 text-rose-700"
                >
                  View Error Details
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Tabs Section */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="grid grid-cols-4 md:w-fit bg-white border border-gray-200 rounded-lg shadow-sm p-1 mb-6">
            <TabsTrigger value="overview" className="flex items-center data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
              <Activity className="h-4 w-4 mr-2 hidden md:block" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="activities" className="flex items-center data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
              <FileText className="h-4 w-4 mr-2 hidden md:block" />
              Activities
            </TabsTrigger>
            <TabsTrigger value="data" className="flex items-center data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
              <Database className="h-4 w-4 mr-2 hidden md:block" />
              Data
            </TabsTrigger>
            <TabsTrigger value="config" className="flex items-center data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700">
              <Settings className="h-4 w-4 mr-2 hidden md:block" />
              Config
            </TabsTrigger>
          </TabsList>
          
          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Pipeline Activity Visualization */}
            <Card className="shadow-lg rounded-lg overflow-hidden border border-gray-200">
              <CardHeader className="bg-white border-b border-gray-100">
                <CardTitle className="text-lg text-gray-800">Pipeline Flow</CardTitle>
                <CardDescription>Visual representation of pipeline activities</CardDescription>
              </CardHeader>
              <CardContent className="p-6 bg-white overflow-x-auto">
                <div className="min-w-fit flex flex-wrap gap-2 items-center justify-center md:justify-start">
                  {pipeline.activities.map((activity, index) => (
                    <div key={activity.activityRunId} className="flex items-center">
                      <div className={`flex flex-col items-center p-4 rounded-lg shadow-md transition-all hover:shadow-lg ${
                        activity.status?.toLowerCase() === "succeeded" ? "bg-emerald-50 border border-emerald-200" :
                        activity.status?.toLowerCase() === "failed" ? "bg-rose-50 border border-rose-200" :
                        activity.status?.toLowerCase() === "running" ? "bg-blue-50 border border-blue-200 animate-pulse" :
                        activity.status?.toLowerCase() === "queued" ? "bg-amber-50 border border-amber-200" :
                        "bg-gray-50 border border-gray-200"
                      }`}>
                        {getActivityIcon(activity.activityType)}
                        <span className="mt-2 text-sm font-medium text-gray-700 text-center">{activity.activityName}</span>
                        <span className="text-xs text-gray-500 mt-1">{formatDuration(activity.durationInMs)}</span>
                        <div className="mt-2">
                          {getStatusIcon(activity.status)}
                        </div>
                      </div>
                      {index < pipeline.activities.length - 1 && (
                        <ArrowRight className="h-6 w-6 mx-1 text-gray-400" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-md rounded-lg overflow-hidden border border-gray-200">
                <CardHeader className="bg-blue-50 border-b border-blue-100">
                  <CardTitle className="text-lg text-blue-800">Pipeline Details</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 bg-white">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-md transition-colors">
                      <div className="flex items-center">
                        <div className="h-8 w-8 bg-blue-100 rounded-md flex items-center justify-center text-blue-600">
                          <FileText className="h-5 w-5" />
                        </div>
                        <span className="ml-3 text-gray-700">Pipeline Name</span>
                      </div>
                      <span className="font-medium text-gray-900">{pipeline_name}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-md transition-colors">
                      <div className="flex items-center">
                        <div className="h-8 w-8 bg-indigo-100 rounded-md flex items-center justify-center text-indigo-600">
                          <Settings className="h-5 w-5" />
                        </div>
                        <span className="ml-3 text-gray-700">Pipeline Type</span>
                      </div>
                      <span className="font-medium text-gray-900">{pipeline.type}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-md transition-colors">
                      <div className="flex items-center">
                        <div className="h-8 w-8 bg-green-100 rounded-md flex items-center justify-center text-green-600">
                          <Calendar className="h-5 w-5" />
                        </div>
                        <span className="ml-3 text-gray-700">Created At</span>
                      </div>
                      <span className="font-medium text-gray-900">{formatDate(pipeline.lastPublishTime)}</span>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-md transition-colors">
                      <div className="flex items-center">
                        <div className="h-8 w-8 bg-purple-100 rounded-md flex items-center justify-center text-purple-600">
                          <Info className="h-5 w-5" />
                        </div>
                        <span className="ml-3 text-gray-700">Run ID</span>
                      </div>
                      <span className="font-mono text-xs bg-gray-100 py-1 px-2 rounded text-gray-800">{pipeline.etag}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md rounded-lg overflow-hidden border border-gray-200">
                <CardHeader className="bg-amber-50 border-b border-amber-100">
                  <CardTitle className="text-lg text-amber-800">Timeline</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 bg-white">
                  <div className="relative pl-8 border-l-2 border-blue-300 space-y-10">
                    <div className="relative">
                      <div className="absolute -left-10 mt-1 rounded-full bg-blue-100 border-4 border-white p-2 shadow-md">
                        <Clock className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-blue-800 text-lg">Pipeline Started</p>
                        <p className="text-gray-600">
                          {primaryActivity ? formatDate(primaryActivity.activityRunStart) : "N/A"}
                        </p>
                      </div>
                    </div>
                    
                    {mainStatus?.toLowerCase() !== "running" && primaryActivity && (
                      <div className="relative">
                        <div className={`absolute -left-10 mt-1 rounded-full p-2 border-4 border-white shadow-md ${
                          mainStatus?.toLowerCase() === "succeeded" ? "bg-emerald-100" : "bg-rose-100"
                        }`}>
                          {mainStatus?.toLowerCase() === "succeeded" ? (
                            <CheckCircle className="h-5 w-5 text-emerald-600" />
                          ) : (
                            <XCircle className="h-5 w-5 text-rose-600" />
                          )}
                        </div>
                        <div>
                          <p className={`font-medium text-lg ${
                            mainStatus?.toLowerCase() === "succeeded" ? "text-emerald-800" : "text-rose-800"
                          }`}>
                            Pipeline {mainStatus?.toLowerCase() === "succeeded" ? "Completed" : "Failed"}
                          </p>
                          <p className="text-gray-600">
                            {formatDate(primaryActivity.activityRunEnd)}
                          </p>
                          {mainStatus?.toLowerCase() === "failed"                          }
                        </div>
                      </div>
                    )}
                    
                    {mainStatus?.toLowerCase() === "running" && (
                      <div className="relative">
                        <div className="absolute -left-10 mt-1 rounded-full bg-blue-100 border-4 border-white p-2 shadow-md animate-pulse">
                          <RefreshCw className="h-5 w-5 text-blue-600 animate-spin" />
                        </div>
                        <div className="animate-pulse">
                          <p className="font-medium text-blue-800 text-lg">Pipeline In Progress</p>
                          <p className="text-gray-600">
                            Started {primaryActivity ? new Date(primaryActivity.activityRunStart).toLocaleTimeString() : "N/A"}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Activities Tab */}
          <TabsContent value="activities" className="space-y-4">
            <Card className="shadow-lg rounded-lg overflow-hidden border border-gray-200">
              <CardHeader className="bg-white border-b border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg text-gray-800">Activities</CardTitle>
                    <CardDescription>
                      {pipeline.activities.length} activities in this pipeline run
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-emerald-500 mr-1"></span>
                      <span className="text-xs">Success: {pipeline.activities.filter(a => a.status === 'Succeeded').length}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-rose-500 mr-1"></span>
                      <span className="text-xs">Failed: {pipeline.activities.filter(a => a.status === 'Failed').length}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-3 h-3 rounded-full bg-amber-500 mr-1"></span>
                      <span className="text-xs">Running: {pipeline.activities.filter(a => a.status === 'Running').length}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6 bg-white">
                <div className="space-y-4">
                  {pipeline.activities.map((activity) => (
                    <div 
                      key={activity.activityRunId}
                      className={`shadow-sm border rounded-lg transition-all duration-200 ${
                        activity.status?.toLowerCase() === "succeeded" ? "border-emerald-200 hover:border-emerald-300" :
                        activity.status?.toLowerCase() === "failed" ? "border-rose-200 hover:border-rose-300" :
                        activity.status?.toLowerCase() === "running" ? "border-blue-200 hover:border-blue-300 animate-pulse" :
                        activity.status?.toLowerCase() === "queued" ? "border-amber-200 hover:border-amber-300" :
                        "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div 
                        className={`p-4 cursor-pointer flex justify-between items-center ${
                          activity.status?.toLowerCase() === "succeeded" ? "bg-emerald-50" :
                          activity.status?.toLowerCase() === "failed" ? "bg-rose-50" :
                          activity.status?.toLowerCase() === "running" ? "bg-blue-50" :
                          activity.status?.toLowerCase() === "queued" ? "bg-amber-50" :
                          "bg-gray-50"
                        }`}
                        onClick={() => toggleExpandActivity(activity.activityRunId)}
                      >
                        <div className="flex items-center gap-4">
                          {getActivityIcon(activity.activityType)}
                          <div>
                            <h3 className="font-medium text-gray-800">{activity.activityName}</h3>
                            <p className="text-xs text-gray-500">{activity.activityType}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge className={cn("px-3 py-1", getStatusColor(activity.status))}>
                            {getStatusIcon(activity.status)}
                            <span className="ml-1">{activity.status}</span>
                          </Badge>
                          <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${
                            expandedActivityId === activity.activityRunId ? "rotate-180" : ""
                          }`} />
                        </div>
                      </div>
                      
                      {expandedActivityId === activity.activityRunId && (
                        <div className="p-4 border-t border-gray-200">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="bg-gray-50 p-3 rounded-md">
                              <p className="text-gray-500 font-medium mb-1">Start Time</p>
                              <p className="text-gray-800">{formatDate(activity.activityRunStart)}</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-md">
                              <p className="text-gray-500 font-medium mb-1">End Time</p>
                              <p className="text-gray-800">{activity.activityRunEnd ? formatDate(activity.activityRunEnd) : "In progress"}</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-md">
                              <p className="text-gray-500 font-medium mb-1">Duration</p>
                              <p className="text-gray-800">{formatDuration(activity.durationInMs)}</p>
                            </div>
                          </div>
                          
                          {activity.output && (
                            <div className="mb-4">
                              <h4 className="text-sm font-medium text-gray-700 mb-2">Output Metrics</h4>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="border border-gray-200 p-3 rounded-md hover:bg-gray-50 transition-colors">
                                  <h4 className="text-sm font-medium text-gray-500 mb-2 flex items-center">
                                    <DownloadCloud className="h-4 w-4 mr-2" /> Data Read
                                  </h4>
                                  <p className="text-gray-800 font-medium">
                                    {activity.output.dataRead ? `${(activity.output.dataRead / 1024).toFixed(2)} KB` : "N/A"}
                                  </p>
                                </div>
                                <div className="border border-gray-200 p-3 rounded-md hover:bg-gray-50 transition-colors">
                                  <h4 className="text-sm font-medium text-gray-500 mb-2 flex items-center">
                                    <UploadCloud className="h-4 w-4 mr-2" /> Data Written
                                  </h4>
                                  <p className="text-gray-800 font-medium">
                                    {activity.output.dataWritten ? `${(activity.output.dataWritten / 1024).toFixed(2)} KB` : "N/A"}
                                  </p>
                                </div>
                                <div className="border border-gray-200 p-3 rounded-md hover:bg-gray-50 transition-colors">
                                  <h4 className="text-sm font-medium text-gray-500 mb-2 flex items-center">
                                    <FileText className="h-4 w-4 mr-2" /> Files Processed
                                  </h4>
                                  <p className="text-gray-800 font-medium">
                                    Read: {activity.output.filesRead || 0}, Written: {activity.output.filesWritten || 0}
                                  </p>
                                </div>
                              </div>
                            </div>
                          )}
                          
                          {/* Error information if activity failed */}
                          {activity.status?.toLowerCase() === "failed" && activity.error && (
                            <div className="mb-4">
                              <h4 className="text-sm font-medium text-rose-500 mb-2 flex items-center">
                                <AlertTriangle className="h-4 w-4 mr-2" /> Error Information
                              </h4>
                              <div className="p-4 bg-rose-50 border border-rose-200 rounded-md text-sm shadow-sm">
                                <p className="font-medium text-rose-700">{activity.error.errorCode}</p>
                                <p className="text-rose-600 mt-1">{activity.error.message}</p>
                                {activity.error.failureType && (
                                  <p className="text-gray-600 mt-2 bg-white p-1 rounded">
                                    <span className="font-medium">Failure Type:</span> {activity.error.failureType}
                                  </p>
                                )}
                                {activity.error.details && (
                                  <details className="mt-2">
                                    <summary className="text-sm font-medium text-rose-600 cursor-pointer">
                                      View Details
                                    </summary>
                                    <pre className="mt-2 p-2 bg-white rounded text-xs overflow-x-auto">
                                      {activity.error.details}
                                    </pre>
                                  </details>
                                )}
                              </div>
                            </div>
                          )}
                          
                          {/* Activity details expandable section */}
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                                <Settings className="h-4 w-4 mr-2" /> Configuration
                              </h4>
                              <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div>
                                    <h5 className="text-xs font-medium text-gray-500 mb-1">Linked Service</h5>
                                    <p className="text-gray-800">
                                      {activity.linkedServiceName || "N/A"}
                                    </p>
                                  </div>
                                  <div>
                                    <h5 className="text-xs font-medium text-gray-500 mb-1">Integration Runtime</h5>
                                    <p className="text-gray-800">
                                      {activity.executionDetails?.integrationRuntime?.[0]?.name || "N/A"}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                                <Cpu className="h-4 w-4 mr-2" /> Runtime Metrics
                              </h4>
                              <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  {activity.output?.usedDataIntegrationUnits && (
                                    <div>
                                      <h5 className="text-xs font-medium text-gray-500 mb-1">Data Integration Units</h5>
                                      <p className="text-gray-800">
                                        {activity.output.usedDataIntegrationUnits} DIUs
                                      </p>
                                    </div>
                                  )}
                                  {activity.output?.copyDuration && (
                                    <div>
                                      <h5 className="text-xs font-medium text-gray-500 mb-1">Copy Duration</h5>
                                      <p className="text-gray-800">
                                        {activity.output.copyDuration} seconds
                                      </p>
                                    </div>
                                  )}
                                  {activity.output?.throughput && (
                                    <div>
                                      <h5 className="text-xs font-medium text-gray-500 mb-1">Throughput</h5>
                                      <p className="text-gray-800">
                                        {activity.output.throughput.toFixed(2)} KB/s
                                      </p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                                  <FileJson className="h-4 w-4 mr-2" /> Input
                                </h4>
                                <div className="relative">
                                  <pre className="p-3 bg-gray-50 border rounded text-sm overflow-x-auto max-h-60 overflow-y-auto">
                                    {JSON.stringify(activity.input, null, 2)}
                                  </pre>
                                  <button 
                                    className="absolute top-2 right-2 bg-white p-1 rounded border hover:bg-gray-100 shadow-sm"
                                    onClick={() => {
                                      navigator.clipboard.writeText(JSON.stringify(activity.input, null, 2));
                                    }}
                                    title="Copy to clipboard"
                                  >
                                    <Copy className="h-4 w-4 text-gray-500" />
                                  </button>
                                </div>
                              </div>
                              
                              <div>
                                <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                                  <FileJson className="h-4 w-4 mr-2" /> Output
                                </h4>
                                <div className="relative">
                                  <pre className="p-3 bg-gray-50 border rounded text-sm overflow-x-auto max-h-60 overflow-y-auto">
                                    {JSON.stringify(activity.output, null, 2)}
                                  </pre>
                                  <button 
                                    className="absolute top-2 right-2 bg-white p-1 rounded border hover:bg-gray-100 shadow-sm"
                                    onClick={() => {
                                      navigator.clipboard.writeText(JSON.stringify(activity.output, null, 2));
                                    }}
                                    title="Copy to clipboard"
                                  >
                                    <Copy className="h-4 w-4 text-gray-500" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Data Tab */}
          <TabsContent value="data" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Data Flow</CardTitle>
                <CardDescription>Information about data processed in this pipeline</CardDescription>
              </CardHeader>
              <CardContent>
                {pipeline.activities.length > 0 && pipeline.activities.some(a => a.output && (a.output.dataRead || a.output.dataWritten)) ? (
                  <div className="space-y-6">
                    {/* Data volume summary */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="bg-blue-50 border-blue-200">
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-lg font-medium mb-2">Total Data Read</h3>
                              <p className="text-3xl font-bold">
                                {(totalDataRead / 1024).toFixed(2)} KB
                              </p>
                            </div>
                            <DownloadCloud className="h-10 w-10 text-blue-500" />
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-green-50 border-green-200">
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-lg font-medium mb-2">Total Data Written</h3>
                              <p className="text-3xl font-bold">
                                {(totalDataWritten / 1024).toFixed(2)} KB
                              </p>
                            </div>
                            <UploadCloud className="h-10 w-10 text-green-500" />
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-purple-50 border-purple-200">
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-lg font-medium mb-2">Files Processed</h3>
                              <p className="text-3xl font-bold">
                                {pipeline.activities.reduce((sum, activity) => 
                                  sum + (activity.output?.filesRead || 0) + (activity.output?.filesWritten || 0), 0)}
                              </p>
                            </div>
                            <FileText className="h-10 w-10 text-purple-500" />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Data processing details */}
                    <div>
                      <h3 className="text-lg font-medium mb-4">Data Processing Details</h3>
                      <div className="overflow-x-auto shadow-sm border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Read</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Written</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Files</th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {pipeline.activities.map((activity) => (
                              <tr key={activity.activityRunId} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    {getActivityIcon(activity.activityType)}
                                    <div className="ml-3">
                                      <div className="font-medium text-gray-900">{activity.activityName}</div>
                                      <div className="text-xs text-gray-500">{activity.activityType}</div>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <Badge className={getStatusColor(activity.status)}>
                                    {activity.status}
                                  </Badge>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {activity.output?.dataRead ? 
                                    `${(activity.output.dataRead / 1024).toFixed(2)} KB` : 
                                    "N/A"}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {activity.output?.dataWritten ? 
                                    `${(activity.output.dataWritten / 1024).toFixed(2)} KB` : 
                                    "N/A"}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex gap-2">
                                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                      R: {activity.output?.filesRead || "0"}
                                    </span>
                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                      W: {activity.output?.filesWritten || "0"}
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  {formatDuration(activity.durationInMs)}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    
                    {/* Download raw data button */}
                    <div className="flex justify-end">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="bg-white hover:bg-gray-50 border-gray-200 shadow-sm"
                        onClick={() => {
                          const dataStr = JSON.stringify(pipeline.activities.map(a => ({
                            name: a.activityName,
                            type: a.activityType,
                            dataRead: a.output?.dataRead || 0,
                            dataWritten: a.output?.dataWritten || 0,
                            filesRead: a.output?.filesRead || 0,
                            filesWritten: a.output?.filesWritten || 0,
                            duration: a.durationInMs || 0
                          })), null, 2);
                          const blob = new Blob([dataStr], { type: 'application/json' });
                          const url = URL.createObjectURL(blob);
                          const link = document.createElement('a');
                          link.href = url;
                          link.download = `pipeline-data-${pipeline.etag}.json`;
                          link.click();
                          URL.revokeObjectURL(url);
                        }}
                      >
                        <Download className="h-4 w-4 mr-2" /> Export Data
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 text-center border-2 border-dashed rounded-lg">
                    <Database className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                    <h3 className="text-lg font-medium mb-1">No detailed data flow available</h3>
                    <p className="text-gray-500">
                      Data volume metrics will be displayed here when available.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
            
            {/* Additional data insights */}
            {pipeline.activities.length > 0 && pipeline.activities.some(a => a.output && (a.output.dataRead || a.output.dataWritten)) && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pipeline Performance</CardTitle>
                  <CardDescription>Performance metrics for this pipeline run</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Throughput</h4>
                      <div className="space-y-3">
                        {pipeline.activities.map((activity) => 
                          activity.output?.throughput ? (
                            <div key={`throughput-${activity.activityRunId}`} className="flex justify-between items-center border-b pb-3">
                              <div className="flex items-center">
                                {getActivityIcon(activity.activityType)}
                                <span className="ml-2 text-sm">{activity.activityName}</span>
                              </div>
                              <span className="font-medium">
                                {activity.output.throughput.toFixed(2)} KB/s
                              </span>
                            </div>
                          ) : null
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Resource Utilization</h4>
                      <div className="space-y-3">
                        {pipeline.activities.map((activity) => 
                          activity.output?.usedDataIntegrationUnits ? (
                            <div key={`diu-${activity.activityRunId}`} className="flex justify-between items-center border-b pb-3">
                              <div className="flex items-center">
                                {getActivityIcon(activity.activityType)}
                                <span className="ml-2 text-sm">{activity.activityName}</span>
                              </div>
                              <span className="font-medium">
                                {activity.output.usedDataIntegrationUnits} DIUs
                              </span>
                            </div>
                          ) : null
                        )}
                        {pipeline.activities.map((activity) => 
                          activity.output?.effectiveIntegrationRuntime ? (
                            <div key={`runtime-${activity.activityRunId}`} className="flex justify-between items-center pb-3">
                              <div className="flex items-center">
                                <Server className="h-5 w-5 text-gray-500 mr-2" />
                                <span className="text-sm">Integration Runtime</span>
                              </div>
                              <span className="font-medium">
                                {activity.output.effectiveIntegrationRuntime}
                              </span>
                            </div>
                          ) : null
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          {/* Configuration Tab */}
          <TabsContent value="config" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pipeline Configuration</CardTitle>
                <CardDescription>Pipeline settings and parameters</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Pipeline Parameters */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Pipeline Parameters</h4>
                    <div className="relative">
                      <pre className="p-3 bg-gray-50 border rounded text-sm overflow-x-auto max-h-96">
                        {JSON.stringify(pipeline.policy, null, 2) !== '{}' 
                          ? JSON.stringify(pipeline.policy, null, 2)
                          : "No parameters available"}
                      </pre>
                      <button 
                        className="absolute top-2 right-2 bg-white p-1 rounded border hover:bg-gray-100 shadow-sm"
                        onClick={() => {
                          navigator.clipboard.writeText(JSON.stringify(pipeline.policy, null, 2));
                        }}
                        title="Copy to clipboard"
                      >
                        <Copy className="h-4 w-4 text-gray-500" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Activity Configuration */}
                  {pipeline.activities.map((activity) => (
                    <div key={`config-${activity.activityRunId}`} className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-medium flex items-center">
                          {getActivityIcon(activity.activityType)}
                          <span className="ml-2">{activity.activityName} Configuration</span>
                        </h3>
                        <Badge variant="outline" className="text-gray-600">
                          {activity.activityType}
                        </Badge>
                      </div>
                      
                      {/* Input Configuration */}
                      {activity.input && (
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-500 mb-2 flex items-center">
                            <DownloadCloud className="h-4 w-4 mr-2" /> Input Configuration
                          </h4>
                          <div className="relative">
                            <pre className="p-3 bg-gray-50 border rounded text-sm overflow-x-auto max-h-80 overflow-y-auto">
                              {JSON.stringify(activity.input, null, 2)}
                            </pre>
                            <button 
                              className="absolute top-2 right-2 bg-white p-1 rounded border hover:bg-gray-100 shadow-sm"
                              onClick={() => {
                                navigator.clipboard.writeText(JSON.stringify(activity.input, null, 2));
                              }}
                              title="Copy to clipboard"
                            >
                              <Copy className="h-4 w-4 text-gray-500" />
                            </button>
                          </div>
                        </div>
                      )}
                      
                      {/* Output Configuration - Summary */}
                      {activity.output && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-2 flex items-center">
                            <UploadCloud className="h-4 w-4 mr-2" /> Output Summary
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="p-3 bg-gray-50 border rounded hover:bg-gray-100 transition-colors">
                              <span className="block text-xs text-gray-500">Copy Duration</span>
                              <span className="font-medium">{activity.output.copyDuration || 'N/A'} seconds</span>
                            </div>
                            <div className="p-3 bg-gray-50 border rounded hover:bg-gray-100 transition-colors">
                              <span className="block text-xs text-gray-500">Source Peak Connections</span>
                              <span className="font-medium">{activity.output.sourcePeakConnections || 'N/A'}</span>
                            </div>
                            <div className="p-3 bg-gray-50 border rounded hover:bg-gray-100 transition-colors">
                              <span className="block text-xs text-gray-500">Sink Peak Connections</span>
                              <span className="font-medium">{activity.output.sinkPeakConnections || 'N/A'}</span>
                            </div>
                          </div>
                          
                          {/* View full output button */}
                          <details className="mb-4">
                            <summary className="cursor-pointer text-sm font-medium text-blue-600 flex items-center">
                              <Maximize className="h-4 w-4 mr-2" /> View Full Output Details
                            </summary>
                            <div className="mt-2 relative">
                              <pre className="p-3 bg-gray-50 border rounded text-sm overflow-x-auto max-h-80 overflow-y-auto">
                                {JSON.stringify(activity.output, null, 2)}
                              </pre>
                              <button 
                                className="absolute top-2 right-2 bg-white p-1 rounded border hover:bg-gray-100 shadow-sm"
                                onClick={() => {
                                  navigator.clipboard.writeText(JSON.stringify(activity.output, null, 2));
                                }}
                                title="Copy to clipboard"
                              >
                                <Copy className="h-4 w-4 text-gray-500" />
                              </button>
                            </div>
                          </details>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}