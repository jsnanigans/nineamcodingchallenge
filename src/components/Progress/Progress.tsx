import styled from '@emotion/styled'
import React, { FC } from 'react'
import ProgressItem, { StepStatus } from './ProgressItem';

const steps = [
  'Successfully ordered',
  'Fill out Medical Assessment',
  'Schedule your at-home lab test',
  'Medical review of results'
]

// const green = '#00790C';

export enum ProgressStatus {
  Ordered = 'ordered', // show "successfully ordered" as completed, and the next step as "in-progress"
  CompletedMedicalAssessment = 'completed-medical-assessment', // show "fill out medical assessment" and all previous steps as completed, and the next step as "in-progress"
  ScheduledLabTest = 'scheduled-lab-test' // show "schedule your at-home lab test" and all previous steps as completed, and the next step as "in-progress"
  // the last step "medical review of results" is never shown as completed, and is shown as "in-progress"
}

interface ProgressProps {
  status: ProgressStatus;
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

const Progress: FC<ProgressProps> = () => {
  return (
    <ListWrap>
      {steps.map((step, index) => {
        const stepStatus: StepStatus = index === 0 ? 'completed' : index === 1 ? 'in-progress' : 'pending';
        return <ProgressItem key={index} label={step} status={stepStatus} />
      })}
    </ListWrap>
  )
}

export default Progress
