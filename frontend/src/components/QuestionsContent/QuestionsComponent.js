import React, { useState, useEffect } from "react";
import { Header, Button, Divider } from "semantic-ui-react";
import "./questionscontent.css";
import QuestionsListComponent from "./QuestionsListComponent";
import axios from "../../utils/axiosconfig";

const QuestionsComponent = () => {
  const [questionCount, setQuestionCount] = useState(0);
  const [questionData, setQuestionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("/questions/question-list");
        if (result.status === 200 && result.statusText === "OK") {
          const { questionCount, questionList } = result.data;
          setQuestionCount(questionCount);
          setQuestionData(questionList);
        } else {
          throw new Error("Some error occured");
        }
      } catch (err) {
        console.log("ERROR", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="questions-header">
        <Header as="h2">All Questions</Header>
        <Button content="Ask Question" size="medium" primary />
      </div>
      <div className="q-count">{questionCount} questions</div>
      <Divider />
      <QuestionsListComponent questionData={questionData} />
    </div>
  );
};

export default QuestionsComponent;
