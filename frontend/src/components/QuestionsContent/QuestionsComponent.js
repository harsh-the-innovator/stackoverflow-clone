import React from "react";
import { Header, Button, Divider } from "semantic-ui-react";
import "./questionscontent.css";
import QuestionsListComponent from "./QuestionsListComponent";

const QuestionsComponent = () => {
  return (
    <div>
      <div className="questions-header">
        <Header as="h2">All Questions</Header>
        <Button content="Ask Question" size="medium" primary />
      </div>
      <div className="q-count">question count</div>
      <Divider />
      <QuestionsListComponent />
    </div>
  );
};

export default QuestionsComponent;
