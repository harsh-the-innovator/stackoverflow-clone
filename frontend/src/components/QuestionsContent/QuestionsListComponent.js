import React from "react";
import { List } from "semantic-ui-react";
import "./questionscontent.scss";

const QuestionsListComponent = ({ questionData }) => {
  console.log(questionData);
  return (
    <List
      divided
      relaxed
      verticalAlign="middle"
      style={{ padding: "0 0.5rem" }}
    >
      {questionData.map((question) => {
        return (
          <List.Item key={question._id}>
            <List.Content>
              <List.Header as="a">{question.title}</List.Header>
              <List.Description>
                <div className="question-body-style">{question.body}</div>
              </List.Description>
            </List.Content>
            <div className="list-footer">
              <div className="question-tags">
                {question.tags.map((tag) => {
                  return <div key={tag._id}>{tag.tagname}</div>;
                })}
              </div>
              <div className="question-username">
                {question.posted_by.username}
              </div>
            </div>
          </List.Item>
        );
      })}
    </List>
  );
};

export default QuestionsListComponent;
