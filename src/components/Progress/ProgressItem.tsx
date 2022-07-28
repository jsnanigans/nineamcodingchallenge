import styled from "@emotion/styled";
import React, { FC } from "react";
import url from "../../assets/checkmark.svg";
import classnames from "classnames";

export type StepStatus = "pending" | "in-progress" | "completed";

const ItemRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  &:not(:last-child) {
    margin: 0 0 2em 0;
  }
`;

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
  background-color: #71d56e;
  &.pending {
    background-color: red;
  }
  &.in-progress {
    background-color: #c9de30;
  }
  &.completed {
    background-color: #71d56e;
  }
`;

const newIcon = styled.img`
  object-fit: cover;
`;

const Text = styled.div``;

const ProgressItem: FC<{
  status: StepStatus;
  label: string;
}> = ({ status, label }) => {
  const iconClass = classnames({
    pending: status === "pending",
    "in-progress": status === "in-progress",
    completed: status === "completed",
  });

  return (
    <ItemRow>
      <Icon className={iconClass}>
        <img src={url} />
      </Icon>
      <Text>{label}</Text>
    </ItemRow>
  );
};

export default ProgressItem;
