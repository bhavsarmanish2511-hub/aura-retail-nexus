import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { WorkflowProcessor } from "@/components/workflow/WorkflowProcessor";

interface LocationState {
  executedActions: Array<{
    id: string;
    action: string;
    description: string;
    cost: string;
    timeline: string;
    confidence?: number;
    impact?: string;
  }>;
  alertData: {
    affectedProducts?: Array<{
      category?: string;
      hsnCode?: string;
      products?: Array<{
        name?: string;
        sku?: string;
        route?: string;
      }>;
    }>;
  };
}

const TriggerWorkflow = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;

  // If no state, redirect back
  if (!state || !state.executedActions || state.executedActions.length === 0) {
    return (
      <div className="min-h-screen bg-background p-8">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </Button>
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-foreground mb-2">No Workflow Data</h2>
            <p className="text-muted-foreground">Please execute actions from the alert detail page first.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Alert Details
        </Button>

        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Trigger Workflow</h1>
          <p className="text-muted-foreground">
            Processing {state.executedActions.length} {state.executedActions.length === 1 ? 'action' : 'actions'} through automated workflow
          </p>
        </div>

        <WorkflowProcessor
          workflowName="Supply Chain Mitigation Workflow"
          workflowDescription="Processing consolidated workflows for all executed strategies"
          executedActions={state.executedActions}
          alertData={state.alertData}
          shouldAnimate={true}
        />
      </div>
    </div>
  );
};

export default TriggerWorkflow;
