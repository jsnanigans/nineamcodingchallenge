import styled from '@emotion/styled'
import React, { FC } from 'react'
import ProgressItem, { StepStatus } from './ProgressItem';

// Steps
const steps = [
  'Successfully ordered',
  'Fill out Medical Assessment',
  'Schedule your at-home lab test',
  'Medical review of results'
]

// const green = '#00790C';

// Step Status -- to decide which steps are completed, in-progress, or pending
export enum ProgressStatus {
  Ordered = 'ordered', // show "successfully ordered" as completed, and the next step as "in-progress"
  CompletedMedicalAssessment = 'completed-medical-assessment', // show "fill out medical assessment" and all previous steps as completed, and the next step as "in-progress"
  ScheduledLabTest = 'scheduled-lab-test', // show "schedule your at-home lab test" and all previous steps as completed, and the next step as "in-progress"
  Finished = 'finished' // show all as completed
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
`

interface ProgressProps {
  status: ProgressStatus;
}

const Progress: FC<ProgressProps> = () => {
  return (
    <ListWrap>
      {steps.map((step, index) => {
        // this simulates the "Ordered" status
        const stepStatus: StepStatus = index === 0 ? StepStatus.Completed : index === 1 ? StepStatus.InProgress : StepStatus.Pending;
        return <ProgressItem key={index} label={step} status={stepStatus} />
      })}
    </ListWrap>
  )
}

export default Progress
