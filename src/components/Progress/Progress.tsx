import styled from '@emotion/styled'
import React, { FC } from 'react'

/*
 Steps:
  - Successfully ordered
  - Fill out Medical Assessment
  - Schedule your at-home lab test
  - Medical review of results
 */

export enum ProgressStatus {
  Initial = 'initial',
  Ordered = 'ordered',
  CompletedMedicalAssessment = 'completed-medical-assessment',
  ScheduledLabTest = 'scheduled-lab-test'
}

interface ProgressProps {
  status: ProgressStatus
}

const ListWrap = styled.div`
  padding: 1em;
  margin: 1em;
  background: white;
  border-radius: 0.5em;
  box-shadow: 0 0 0.5em 0.5em rgba(0, 0, 0, 0.5);
  color: #000000;
  display: flex;
  max-width: 360px;
  margin: 0 auto;
`

const Progress: FC<ProgressProps> = () => {
  return (
    <ListWrap>Progress</ListWrap>
  )
}

export default Progress
