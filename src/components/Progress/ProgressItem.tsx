import styled from '@emotion/styled';
import React, { FC } from 'react'

export enum StepStatus {
  Pending = 'pending', // gray outline - not done yet
  InProgress = 'in-progress', // green outline - current "todo" for user
  Completed = 'completed' // green outline and background, checkmark is visible - step is completed
}

const ItemRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  &:not(:last-child) {
    margin: 0 0 2em 0;
  }
`

const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid gray;
  font-size: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
`

const Text = styled.div``

const ProgressItem: FC<{
  status:  StepStatus;
  label: string;
}> = ({status, label}) => {
  return (
    <ItemRow>
      <Icon>{status}</Icon> <Text>{label}</Text>
    </ItemRow>
  )
}

export default ProgressItem
