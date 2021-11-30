import React from "react";
import { Routes, Route } from "react-router-dom";
import TagsComponent from "../TagsContent/TagsComponent";
import QuestionsComponent from "../QuestionsContent/QuestionsComponent";
import "./content.scss";

const ContentComponent = () => {
  return (
    <div className="content-container">
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="questions" element={<QuestionsComponent />} />
        <Route path="tags" element={<TagsComponent />} />
        <Route path="*" element={<p>There's nothing here!</p>} />
      </Routes>
    </div>
  );
};

export default ContentComponent;
