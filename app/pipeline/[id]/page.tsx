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
  ChevronRight
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
  const [pipeline_name,setName] = useState<String>("")

  useEffect(() => {
    console.log(params.id)
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Fetch all pipeline runs
        const response = await fetch('/api/pipeline-runs');
        if (!response.ok) throw new Error("Failed to fetch pipeline data");
        
        const allRuns = await response.json();

        console.log(allRuns.data)
        
        // Find the pipeline with matching ID
        const pipelineRun = allRuns.data.find((run: PipelineRun) => run.runId === params.id);
        for(let i=0 ; i<allRuns.data.length ; i++){
          if(allRuns.data[i].runId === params.id){
            setName(allRuns.data[i].name)

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
        console.log(activitiesData)
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
      case "Queued":
        return <Clock className="h-5 w-5 text-sky-500" />;
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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-lg font-medium text-gray-700">Loading pipeline details...</span>
      </div>
    );
  }

  if (error || !pipeline) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-center p-8 bg-rose-100 rounded-lg max-w-md w-full shadow-md">
          <AlertTriangle className="h-12 w-12 text-rose-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-rose-700">Pipeline Not Found</h2>
          <p className="mt-2 mb-4 text-rose-600">
            {error || "The requested pipeline could not be found or might have been deleted."}
          </p>
          <Button 
            onClick={() => router.push('/dashboard')}
            className="mt-4 bg-rose-600 hover:bg-rose-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  // Find the primary activity or use the first one
  const primaryActivity = pipeline.activities.length > 0 ? pipeline.activities[0] : null;
  var cur_status = "succeeded"
  for (let i =0 ;i<pipeline.activities.length; i++){
      if(pipeline.activities[i]?.status === "Queued"  ){
        cur_status = "queued"
      }
      if(pipeline.activities[i]?.status === "Failed"){
        cur_status = "failed"
        break;
      }

  }
  const mainStatus = cur_status;
  console.log("Current Status ",mainStatus)
  // Calculate total data processed
  const totalDataRead = pipeline.activities.reduce((sum, activity) => 
    sum + (activity.output?.dataRead || 0), 0);
  
  const totalDataWritten = pipeline.activities.reduce((sum, activity) => 
    sum + (activity.output?.dataWritten || 0), 0);
  
  return (
    <div className="container mx-auto py-8 px-4 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            onClick={() => router.back()}
            size="sm"
            className="bg-white hover:bg-gray-100 border-gray-200 shadow-sm"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Back
          </Button>
          <h1 className="text-2xl font-bold hidden md:block text-gray-800">{pipeline_name}</h1>
        </div>
        
      </div>

      <h1 className="text-2xl font-bold mb-4 md:hidden text-gray-800">{pipeline_name}</h1>

      {/* Summary Card */}
      <Card className="mb-6 overflow-hidden border-t-4 shadow-lg rounded-lg" 
        style={{ borderTopColor: mainStatus?.toLowerCase() === "succeeded" ? "#10b981" : 
                                mainStatus?.toLowerCase() === "failed" ? "#ef4444" : 
                                mainStatus?.toLowerCase() === "queued" ? "#3b82f6" : "#6b7280" }}>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <Activity className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-sm font-medium text-gray-500">Status</span>
              </div>
              <div className="flex items-center">
                {getStatusIcon(mainStatus)}
                <Badge className={`ml-2 ${getStatusColor(mainStatus)} px-3 py-1 text-sm font-medium`}>
                  {mainStatus}
                </Badge>
              </div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-sm font-medium text-gray-500">Start Time</span>
              </div>
              <span className="text-gray-800">{primaryActivity ? formatDate(primaryActivity.activityRunStart) : "N/A"}</span>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <Clock className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-sm font-medium text-gray-500">Duration</span>
              </div>
              <span className="text-gray-800">
                {primaryActivity ? formatDuration(primaryActivity.durationInMs) : "N/A"}
              </span>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <Info className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-sm font-medium text-gray-500">Run ID</span>
              </div>
              <span className="font-mono text-sm truncate text-gray-800" title={pipeline.etag}>{pipeline.etag}</span>
            </div>
          </div>
          
          {mainStatus?.toLowerCase() === "failed" && primaryActivity && primaryActivity.error && (
            <div className="mt-4 p-4 bg-rose-50 border border-rose-200 rounded-md shadow-sm">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-rose-500 mr-2 mt-0.5" />
                <div>
                  <h4 className="font-medium text-rose-700">Pipeline Failed</h4>
                  <p className="text-sm text-rose-600 mt-1">
                    {primaryActivity.error.message || "An error occurred during pipeline execution."}
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Tabs Section */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="grid grid-cols-4 md:w-fit bg-white border border-gray-200 rounded-lg shadow-sm p-1">
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
        <TabsContent value="overview" className="space-y-4">
          <Card className="shadow-md rounded-lg overflow-hidden border border-gray-200">
            <CardHeader className="bg-white border-b border-gray-100">
              <CardTitle className="text-lg text-gray-800">Pipeline Overview</CardTitle>
              <CardDescription>General information about this pipeline run</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Pipeline Details</h3>
                  <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-sm text-gray-600">Pipeline Name</span>
                      <span className="font-medium text-gray-800">{pipeline_name}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-sm text-gray-600">Pipeline Type</span>
                      <span className="font-medium text-gray-800">{pipeline.type}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-sm text-gray-600">Created At</span>
                      <span className="font-medium text-gray-800">{formatDate(pipeline.lastPublishTime)}</span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="text-sm text-gray-600">Run ID</span>
                      <span className="font-medium font-mono text-xs truncate text-gray-800" title={pipeline.etag}>
                        {pipeline.etag}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Run Statistics</h3>
                  <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-sm text-gray-600">Status</span>
                      <div className="flex items-center">
                        {getStatusIcon(mainStatus)}
                        <span className="ml-2 font-medium text-gray-800">{mainStatus}</span>
                      </div>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-sm text-gray-600">Trigger Type</span>
                      <span className="font-medium text-gray-800">
                        {pipeline.policy?.triggerType || "Manual"}
                      </span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-sm text-gray-600">Data Processed</span>
                      <span className="font-medium text-gray-800">
                        {totalDataRead > 0 ? `${(totalDataRead / 1024).toFixed(2)} KB read` : "N/A"}
                      </span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="text-sm text-gray-600">Duration</span>
                      <span className="font-medium text-gray-800">
                        {primaryActivity ? formatDuration(primaryActivity.durationInMs) : "N/A"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md rounded-lg overflow-hidden border border-gray-200">
            <CardHeader className="bg-white border-b border-gray-100">
              <CardTitle className="text-lg text-gray-800">Timeline</CardTitle>
              <CardDescription>Timeline of pipeline execution</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 bg-white">
              <div className="relative pl-8 border-l-2 border-blue-200 space-y-8">
                <div className="relative">
                  <div className="absolute -left-10 mt-1 rounded-full bg-blue-100 border-4 border-white p-1 shadow-md">
                    <Clock className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Pipeline Started</p>
                    <p className="text-sm text-gray-500">
                      {primaryActivity ? formatDate(primaryActivity.activityRunStart) : "N/A"}
                    </p>
                  </div>
                </div>
                
                {mainStatus?.toLowerCase() !== "running" && primaryActivity && (
                  <div className="relative">
                    <div className="absolute -left-10 mt-1 rounded-full border-4 border-white p-1 shadow-md"
                      style={{ backgroundColor: mainStatus?.toLowerCase() === "succeeded" ? "#dcfce7" : "#fee2e2" }}>
                      {mainStatus?.toLowerCase() === "succeeded" ? (
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                      ) : (
                        <XCircle className="h-4 w-4 text-rose-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        Pipeline {mainStatus?.toLowerCase() === "succeeded" ? "Completed" : "Failed"}
                      </p>
                      <p className="text-sm text-gray-500">
                        {formatDate(primaryActivity.activityRunEnd)}
                      </p>
                      {mainStatus?.toLowerCase() === "failed" && primaryActivity.error && (
                        <p className="text-sm text-rose-600 mt-1 bg-rose-50 p-2 rounded-md">
                          {primaryActivity.error.message || "An error occurred during execution"}
                        </p>
                      )}
                    </div>
                  </div>
                )}
                
                {mainStatus?.toLowerCase() === "running" && (
                  <div className="relative">
                    <div className="absolute -left-10 mt-1 rounded-full bg-blue-100 border-4 border-white p-1 shadow-md">
                      <Activity className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="animate-pulse">
                      <p className="font-medium text-blue-800">Pipeline In Progress</p>
                      <p className="text-sm text-gray-500">
                        Started {primaryActivity ? new Date(primaryActivity.activityRunStart).toLocaleTimeString() : "N/A"}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Activities Tab */}
        <TabsContent value="activities" className="space-y-4">
          <Card className="shadow-md rounded-lg overflow-hidden border border-gray-200">
          <CardHeader className="bg-white border-b border-gray-100">
      <CardTitle className="text-lg text-gray-800">Activities</CardTitle>
      <CardDescription>
        <div className="flex items-center gap-4">
          <span>{pipeline.activities.length} activities in this pipeline run</span>
          <div className="flex items-center gap-2">
            <span className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-green-500 mr-1"></span>
              <span className="text-xs">Success: {pipeline.activities.filter(a => a.status === 'Succeeded').length}</span>
            </span>
            <span className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-rose-500 mr-1"></span>
              <span className="text-xs">Failed: {pipeline.activities.filter(a => a.status === 'Failed').length}</span>
            </span>
            <span className="flex items-center">
              <span className="w-3 h-3 rounded-full bg-amber-500 mr-1"></span>
              <span className="text-xs">Running: {pipeline.activities.filter(a => a.status === 'Running').length}</span>
            </span>
          </div>
        </div>
      </CardDescription>
    </CardHeader>
            <CardContent className="pt-6 bg-white">
              <div className="space-y-4">
                {pipeline.activities.map((activity) => (
                  <Card key={activity.activityRunId} className="shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                    <CardHeader className="py-3 px-4 bg-gray-50">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center">
                          {getStatusIcon(activity.status)}
                          <div className="ml-2">
                            <h3 className="font-medium text-gray-800">{activity.activityName}</h3>
                            <p className="text-xs text-gray-500">{activity.activityType}</p>
                          </div>
                        </div>
                        <Badge className={cn("ml-2", getStatusColor(activity.status), "px-3 py-1 text-sm font-medium")}>
                          {activity.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="py-4 px-4 border-t border-gray-100">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
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
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="border border-gray-200 p-3 rounded-md hover:bg-gray-50 transition-colors">
                              <h4 className="text-sm font-medium text-gray-500 mb-2">Data Read</h4>
                              <p className="text-gray-800 font-medium">{activity.output.dataRead ? `${(activity.output.dataRead / 1024).toFixed(2)} KB` : "N/A"}</p>
                            </div>
                            <div className="border border-gray-200 p-3 rounded-md hover:bg-gray-50 transition-colors">
                              <h4 className="text-sm font-medium text-gray-500 mb-2">Data Written</h4>
                              <p className="text-gray-800 font-medium">{activity.output.dataWritten ? `${(activity.output.dataWritten / 1024).toFixed(2)} KB` : "N/A"}</p>
                            </div>
                            <div className="border border-gray-200 p-3 rounded-md hover:bg-gray-50 transition-colors">
                              <h4 className="text-sm font-medium text-gray-500 mb-2">Files Processed</h4>
                              <p className="text-gray-800 font-medium">Read: {activity.output.filesRead || 0}, Written: {activity.output.filesWritten || 0}</p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Error information if activity failed */}
                      {activity.status?.toLowerCase() === "failed" && activity.error && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <h4 className="text-sm font-medium text-rose-500 mb-2">Error Information</h4>
                          <div className="p-4 bg-rose-50 border border-rose-200 rounded-md text-sm shadow-sm">
                            <p className="font-medium text-rose-700">{activity.error.errorCode}</p>
                            <p className="text-rose-600 mt-1">{activity.error.message}</p>
                            {activity.error.failureType && (
                              <p className="text-gray-600 mt-2 bg-white p-1 rounded">Failure Type: {activity.error.failureType}</p>
                            )}
                          </div>
                        </div>
                      )}
                      
                      {/* Activity details expandable section */}
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <details className="text-sm group">
                          <summary className="font-medium cursor-pointer flex items-center text-blue-600 hover:text-blue-800">
                            <ChevronRight className="h-4 w-4 inline-block group-open:hidden mr-1" />
                            <ChevronDown className="h-4 w-4 hidden group-open:inline-block mr-1" />
                            View Activity Details
                          </summary>
                          <div className="mt-3 p-4 bg-gray-50 rounded-md border border-gray-200">
                            <div className="mt-2">
                              <h5 className="font-medium text-gray-700 mb-2">Runtime Information</h5>
                              <div className="bg-white p-3 rounded-md border border-gray-200">
                                <p className="text-gray-600 mb-2">
                                  <span className="font-medium text-gray-700">Integration Runtime:</span> {activity.executionDetails?.integrationRuntime?.[0]?.name || "N/A"}
                                </p>
                                <p className="text-gray-600 mb-2">
                                  <span className="font-medium text-gray-700">Location:</span> {activity.executionDetails?.integrationRuntime?.[0]?.location || "N/A"}
                                </p>
                                {activity.output?.usedDataIntegrationUnits && (
                                  <p className="text-gray-600">
                                    <span className="font-medium text-gray-700">Data Integration Units:</span> {activity.output.usedDataIntegrationUnits}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </details>
                      </div>
                    </CardContent>
                  </Card>
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
                    <Card className="bg-blue-50">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-medium mb-2">Total Data Read</h3>
                        <p className="text-3xl font-bold">
                          {(totalDataRead / 1024).toFixed(2)} KB
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-green-50">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-medium mb-2">Total Data Written</h3>
                        <p className="text-3xl font-bold">
                          {(totalDataWritten / 1024).toFixed(2)} KB
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-purple-50">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-medium mb-2">Files Processed</h3>
                        <p className="text-3xl font-bold">
                          {pipeline.activities.reduce((sum, activity) => 
                            sum + (activity.output?.filesRead || 0) + (activity.output?.filesWritten || 0), 0)}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Data processing details */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Data Processing Details</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Read</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Written</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Files Read</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Files Written</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {pipeline.activities.map((activity) => (
                            <tr key={activity.activityRunId}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="font-medium text-gray-900">{activity.activityName}</div>
                                <div className="text-sm text-gray-500">{activity.activityType}</div>
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
                                {activity.output?.filesRead || "0"}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {activity.output?.filesWritten || "0"}
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
                    <Button variant="outline" size="sm" onClick={() => {
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
                    }}>
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
                          <div key={`throughput-${activity.activityRunId}`} className="flex justify-between border-b pb-2">
                            <span className="text-sm">{activity.activityName}</span>
                            <span className="font-medium">{activity.output.throughput.toFixed(2)} KB/s</span>
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
                          <div key={`diu-${activity.activityRunId}`} className="flex justify-between border-b pb-2">
                            <span className="text-sm">{activity.activityName}</span>
                            <span className="font-medium">{activity.output.usedDataIntegrationUnits} DIUs</span>
                          </div>
                        ) : null
                      )}
                      {pipeline.activities.map((activity) => 
                        activity.output?.effectiveIntegrationRuntime ? (
                          <div key={`runtime-${activity.activityRunId}`} className="flex justify-between pb-2">
                            <span className="text-sm">Integration Runtime</span>
                            <span className="font-medium">{activity.output.effectiveIntegrationRuntime}</span>
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
              <div className="space-y-4">
                {/* Activity Configuration */}
                {pipeline.activities.map((activity) => (
                  <div key={`config-${activity.activityRunId}`} className="mb-6">
                    <h3 className="text-lg font-medium mb-4">{activity.activityName} Configuration</h3>
                    
                    {/* Input Configuration */}
                    {activity.input && (
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-500 mb-2">Input Configuration</h4>
                        <div className="relative">
                          <pre className="p-3 bg-gray-50 border rounded text-sm overflow-x-auto max-h-80 overflow-y-auto">
                            {JSON.stringify(activity.input, null, 2)}
                          </pre>
                          <button 
                            className="absolute top-2 right-2 bg-white p-1 rounded border hover:bg-gray-100"
                            onClick={() => {
                              navigator.clipboard.writeText(JSON.stringify(activity.input, null, 2));
                            }}
                            title="Copy to clipboard"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    )}
                    
                    {/* Output Configuration - Summary */}
                    {activity.output && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-2">Output Summary</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="p-3 bg-gray-50 border rounded">
                            <span className="block text-xs text-gray-500">Copy Duration</span>
                            <span className="font-medium">{activity.output.copyDuration || 'N/A'} seconds</span>
                          </div>
                          <div className="p-3 bg-gray-50 border rounded">
                            <span className="block text-xs text-gray-500">Source Peak Connections</span>
                            <span className="font-medium">{activity.output.sourcePeakConnections || 'N/A'}</span>
                          </div>
                          <div className="p-3 bg-gray-50 border rounded">
                            <span className="block text-xs text-gray-500">Sink Peak Connections</span>
                            <span className="font-medium">{activity.output.sinkPeakConnections || 'N/A'}</span>
                          </div>
                        </div>
                        
                        {/* View full output button */}
                        <details className="mb-4">
                          <summary className="cursor-pointer text-sm font-medium text-blue-600">
                            View Full Output Details
                          </summary>
                          <div className="mt-2 relative">
                            <pre className="p-3 bg-gray-50 border rounded text-sm overflow-x-auto max-h-80 overflow-y-auto">
                              {JSON.stringify(activity.output, null, 2)}
                            </pre>
                            <button 
                              className="absolute top-2 right-2 bg-white p-1 rounded border hover:bg-gray-100"
                              onClick={() => {
                                navigator.clipboard.writeText(JSON.stringify(activity.output, null, 2));
                              }}
                              title="Copy to clipboard"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                            </button>
                          </div>
                        </details>
                      </div>
                    )}
                    
                    {/* Execution Details */}
                    {activity.output?.executionDetails && activity.output.executionDetails.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-2">Execution Details</h4>
                        {activity.output.executionDetails.map((detail:any, idx:any) => (
                          <div key={`exec-${activity.activityRunId}-${idx}`} className="p-3 bg-gray-50 border rounded mb-3">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                <span className="block text-xs text-gray-500">Source</span>
                                <span className="font-medium">{detail.source.type}</span>
                                <span className="block text-xs text-gray-500 mt-1">Region</span>
                                <span className="font-medium">{detail.source.region}</span>
                              </div>
                              <div>
                                <span className="block text-xs text-gray-500">Sink</span>
                                <span className="font-medium">{detail.sink.type}</span>
                                <span className="block text-xs text-gray-500 mt-1">Region</span>
                                <span className="font-medium">{detail.sink.region}</span>
                              </div>
                              <div>
                                <span className="block text-xs text-gray-500">Status</span>
                                <span className="font-medium">{detail.status}</span>
                                <span className="block text-xs text-gray-500 mt-1">Duration</span>
                                <span className="font-medium">{detail.duration} seconds</span>
                              </div>
                            </div>
                            
                            {/* Detailed profiling information */}
                            {detail.profile && (
                              <div className="mt-3 pt-3 border-t border-gray-200">
                                <h5 className="text-xs font-medium text-gray-500 mb-2">Detailed Profiling</h5>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {detail.profile.queue && (
                                    <div>
                                      <span className="block text-xs text-gray-500">Queue</span>
                                      <span className="font-medium">Status: {detail.profile.queue.status}</span>
                                      <span className="block text-xs">Duration: {detail.profile.queue.duration} seconds</span>
                                    </div>
                                  )}
                                  {detail.profile.transfer && (
                                    <div>
                                      <span className="block text-xs text-gray-500">Transfer</span>
                                      <span className="font-medium">Status: {detail.profile.transfer.status}</span>
                                      <span className="block text-xs">Duration: {detail.profile.transfer.duration} seconds</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Pipeline Parameters */}
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Pipeline Parameters</h4>
                  <pre className="p-3 bg-gray-50 border rounded text-sm overflow-x-auto">
                    {JSON.stringify(pipeline.policy, null, 2) !== '{}' 
                      ? JSON.stringify(pipeline.policy, null, 2)
                      : "No parameters available"}
                  </pre>
                </div>
                
                {/* Billing Information */}
                {pipeline.activities.some(a => a.output?.billingReference) && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Billing Information</h4>
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meter Type</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Units</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {pipeline.activities.map((activity) => 
                          activity.output?.billingReference?.billableDuration?.map((billing:any, idx:any) => (
                            <tr key={`billing-${activity.activityRunId}-${idx}`}>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {activity.activityName}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {billing.meterType}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {billing.duration}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                {billing.unit}
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}