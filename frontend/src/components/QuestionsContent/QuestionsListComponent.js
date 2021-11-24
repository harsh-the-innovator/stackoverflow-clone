import React from "react";
import { List } from "semantic-ui-react";

const QuestionsList = () => {
  return (
    <List
      divided
      relaxed
      verticalAlign="middle"
      style={{ padding: "0 0.5rem" }}
    >
      <List.Item>
        <List.Content as="div">
          <List.Header as="a">Title</List.Header>
          <List.Description as="a">Description</List.Description>
        </List.Content>
      </List.Item>
    </List>
  );
};

export default QuestionsList;
