import styled from '@emotion/styled'
import React, { FC, useCallback, useMemo } from 'react'
import ProgressItem, { StepStatus } from './ProgressItem';

// const green = '#00790C';

// Step Status -- to decide which steps are completed, in-progress, or pending
export enum ProgressStatus {
  Ordered = 'ordered', // show "successfully ordered" as completed, and the next step as "in-progress"
  CompletedMedicalAssessment = 'completed-medical-assessment', // show "fill out medical assessment" and all previous steps as completed, and the next step as "in-progress"
  ScheduledLabTest = 'scheduled-lab-test', // show "schedule your at-home lab test" and all previous steps as completed, and the next step as "in-progress"
  Finished = 'finished' // show all as completed
  // the last step "medical review of results" is never shown as completed, and is shown as "in-progress"
}

// Steps
const steps = [
  {label: 'Successfully ordered', doneStatusItem: ProgressStatus.Ordered},
  {label: 'Fill out medical assessment', doneStatusItem: ProgressStatus.CompletedMedicalAssessment},
  {label: 'Schedule your at-home lab test', doneStatusItem: ProgressStatus.ScheduledLabTest},
  {label: 'Medical review of results', doneStatusItem: ProgressStatus.Finished}
]

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

const Progress: FC<ProgressProps> = (props) => {
  const computedSteps = useMemo<{
    label: string;
    doneStatusItem: ProgressStatus;
    status: StepStatus;
  }[]>(() => {
    return steps.map(step => {
      return {
        ...step,
        status: step.doneStatusItem === props.status ? StepStatus.Completed : StepStatus.InProgress
      }
    });
  }, [props.status])

  return (
    <ListWrap>
      {computedSteps.map(({label, status}, index) => {
        return <ProgressItem key={index} label={label} status={status} />
      })}
    </ListWrap>
  )
}

export default Progress
