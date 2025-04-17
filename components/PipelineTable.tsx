"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertCircle, CheckCircle, Clock, Calendar, Database, BarChart, Activity, RefreshCw } from "lucide-react";



interface PipelineDummy {
  id: string;
  name: string;
  runId: string | null;
  status: string | null;
  message: string | null;
  runStart: Date | null;
  runEnd: Date | null;
  properties: any;
  createdAt: Date;
  updatedAt: Date;
}

export default function PipelineDashboard() {
  const router = useRouter();
  const [pipelines, setPipelines] = useState<PipelineDummy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchPipelineData = async () => {
    try { 
      const response = await axios.get("/api/pipeline-runs");
      setPipelines(response.data.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching pipeline data:", err);
      setError("Failed to load pipeline data");
    } 
  };

  const fetchAndStoreData = async () => {
    try {
      await axios.get("http://localhost:3000/api/fetch-and-store");
    } catch (err) {
      console.error("Error fetching and storing data:", err);
    }
  };

  const refreshAllData = async () => {
    setRefreshing(true);
    setIsLoading(false);
    await fetchAndStoreData();
    await fetchPipelineData();
    setRefreshing(false);
  };


  useEffect(() => {
    console.log("fetch call before")
    fetchPipelineData()
    refreshAllData();
    const interval = setInterval(() => refreshAllData(), 10000);
    return () => clearInterval(interval);
  }, []);



  const formatDuration = (start: Date | null, end: Date | null): string => {
    if (!start || !end) return "N/A";
    const ms = new Date(end).getTime() - new Date(start).getTime();
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    const hours = Math.floor(ms / (1000 * 60 * 60));
    return [hours > 0 ? `${hours}h` : "", minutes > 0 ? `${minutes}m` : "", `${seconds}s`].filter(Boolean).join(" ");
  };

    const formatDate = (date: Date | null): string => {
      if (!date) return "N/A";
      return new Date(date).toLocaleString();
    };

  const handleRunClick = (runId: string) => {
    console.log(runId)
    router.push(`/pipeline/${runId}`);
  };

  const getStatusData = () => {
    const total = pipelines.length;
    const succeeded = pipelines.filter(p => p.status === "Succeeded").length;
    const failed = pipelines.filter(p => p.status === "Failed").length;
    const pending = total - succeeded - failed;
    return { total, succeeded, failed, pending };
  };

  const statusData = getStatusData();

  if (isLoading) {
    return (
      <div className="nexus-container">
        <div className="nexus-header">
          <div className="nexus-logo"><Activity className="nexus-logo-icon" /><h1>Nexus</h1></div>
          <p className="nexus-tagline">Pipeline Monitoring System</p>
        </div>
        <div className="nexus-loading">
          <div className="loading-spinner"></div>
          <p>Loading pipeline data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="nexus-container">
        <div className="nexus-header">
          <div className="nexus-logo"><Activity className="nexus-logo-icon" /><h1>Nexus</h1></div>
          <p className="nexus-tagline">Pipeline Monitoring System</p>
        </div>
        <div className="nexus-error">
          <AlertCircle className="nexus-error-icon" />
          <p>{error}</p>
          <button className="nexus-button" onClick={refreshAllData}>Try Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="nexus-container">
      <div className="nexus-header">
        <div className="nexus-logo"><Activity className="nexus-logo-icon" /><h1>Nexus</h1></div>
        <p className="nexus-tagline">Pipeline Monitoring System</p>
        <button 
          className={`nexus-refresh-button ${refreshing ? 'refreshing' : ''}`} 
          onClick={refreshAllData}
          disabled={refreshing}
        >
          <RefreshCw className="nexus-refresh-icon" />
          <span>{refreshing ? 'Refreshing...' : 'Refresh'}</span>
        </button>
      </div>

      <div className="nexus-stats-overview">
        <div className="nexus-stat-card">
          <div className="nexus-stat-icon-wrapper"><BarChart className="nexus-stat-icon" /></div>
          <div className="nexus-stat-content"><h3>{statusData.total}</h3><p>Total Runs</p></div>
        </div>
        <div className="nexus-stat-card success">
          <div className="nexus-stat-icon-wrapper"><CheckCircle className="nexus-stat-icon" /></div>
          <div className="nexus-stat-content"><h3>{statusData.succeeded}</h3><p>Successful</p></div>
        </div>
        <div className="nexus-stat-card error">
          <div className="nexus-stat-icon-wrapper"><AlertCircle className="nexus-stat-icon" /></div>
          <div className="nexus-stat-content"><h3>{statusData.failed}</h3><p>Failed</p></div>
        </div>
       
      </div>

      <div className="nexus-dashboard">
        <Card className="nexus-main-card">
          <CardHeader className="nexus-card-header">
            <div className="nexus-card-header-content">
              <div>
                <CardTitle className="nexus-card-title">Pipeline Runs</CardTitle>
                <CardDescription>Recent pipeline execution status and details</CardDescription>
              </div>
              <Badge className="nexus-runs-badge">{pipelines.length} Runs</Badge>
            </div>
          </CardHeader>
          <CardContent className="nexus-card-content">
            <ScrollArea className="nexus-scroll-area">
              <div className="nexus-runs-grid">
                {pipelines.map((run, index) => {
                  const status = run.status;
                  let statusClass = "pending";
                  let icon = <Clock className="nexus-status-icon" />;
                  let statusText = "Pending";

                  if (status === "Succeeded") {
                    statusClass = "success";
                    icon = <CheckCircle className="nexus-status-icon" />;
                    statusText = "Success";
                  } else if (status === "Failed") {
                    statusClass = "error";
                    icon = <AlertCircle className="nexus-status-icon" />;
                    statusText = "Failed";
                  }

                  return (
                    <div key={run.id} className="nexus-run-wrapper animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
                      <Card 
                        className={`nexus-run-card ${statusClass}`}
                        onClick={() => handleRunClick(run.runId )}
                      >
                        <div className="nexus-run-status-indicator"></div>
                        <CardContent className="nexus-run-content">
                          <div className="nexus-run-header">
                            <h3 className="nexus-pipeline-name">{run.name}</h3>
                            <div className={`nexus-status ${statusClass}`}>{icon}<span>{statusText}</span></div>
                          </div>
                          <div className="nexus-run-details">
                            <div className="nexus-run-detail"><Clock className="nexus-detail-icon" /><span className="nexus-detail-label">Duration:</span><span className="nexus-detail-value">{formatDuration(run.runStart, run.runEnd)}</span></div>
                            <div className="nexus-run-detail"><Database className="nexus-detail-icon" /><span className="nexus-detail-label">Data:</span><span className="nexus-detail-value">N/A</span></div>
                            <div className="nexus-run-detail"><Calendar className="nexus-detail-icon" /><span className="nexus-detail-label">Created:</span><span className="nexus-detail-value">{run.runStart.slice(0,10)}</span></div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
