import styled from "@emotion/styled";
import { FC } from "react";
import ProgressItem, { StepStatus } from "./ProgressItem";

// Steps
const steps = [
  "Successfully ordered",
  "Fill out Medical Assessment",
  "Schedule your at-home lab test",
  "Medical review of results",
];

// const green = '#00790C';

// Step Status -- to decide which steps are completed, in-progress, or pending
export enum ProgressStatus {
  Ordered = "ordered", // show "successfully ordered" as completed, and the next step as "in-progress"
  CompletedMedicalAssessment = "completed-medical-assessment", // show "fill out medical assessment" and all previous steps as completed, and the next step as "in-progress"
  ScheduledLabTest = "scheduled-lab-test", // show "schedule your at-home lab test" and all previous steps as completed, and the next step as "in-progress"
  // the last step "medical review of results" is never shown as completed, and is shown as "in-progress"
}

const ListWrap = styled.div`
  padding: 1em;
  margin: 1em;
  background: white;
  border-radius: 0.5em;
  box-shadow: 0 0 0.5em 0.5em rgba(0, 0, 0, 0.5);
  color: #000000;
  display: flex;
  flex-direction: column;
  max-width: 360px;
  margin: 0 auto;
`;

interface ProgressProps {
  status: ProgressStatus;
}

const Progress: FC<ProgressProps> = (prop) => {
  const { status: stepStatus } = prop;

  const newGetStatusValue = (): { [key: string]: StepStatus } => {
    let stepsStatus = {
      "Successfully ordered": "completed",
      "Fill out Medical Assessment":
        stepStatus !== "ordered" ? "completed" : "in-progress",
      "Schedule your at-home lab test": "pending",
      "Medical review of results": "pending",
    };

    if (stepStatus === "completed-medical-assessment") {
      stepsStatus["Schedule your at-home lab test"] = "in-progress";
      stepsStatus["Medical review of results"] = "pending";
    }
    if (stepStatus === "scheduled-lab-test") {
      stepsStatus["Schedule your at-home lab test"] = "completed";
      stepsStatus["Medical review of results"] = "in-progress";
    }
    return stepsStatus as any;
  };

  const status = newGetStatusValue();

  return (
    <ListWrap>
      {steps.map((step, index) => {
        return <ProgressItem key={index} label={step} status={status[step]} />;
      })}
    </ListWrap>
  );
};

export default Progress;
