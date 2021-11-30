import React, { useState, useEffect } from "react";
import { Header, Divider } from "semantic-ui-react";
import axios from "../../utils/axiosconfig";
import TagGridComponent from "./TagGridComponent";
import "./tagscontent.scss";

const TagsComponent = () => {
  const [tagList, setTagList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("/tag/tag-list");
        if (result.status === 200 && result.statusText === "OK") {
          setTagList(result.data.tagList);
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
    <div className="tags-container">
      <div className="tags-header">
        <Header as="h2">Tags</Header>
      </div>
      <div className="tags-description">
        A tag is a keyword or label that categorizes your question with other,
        similar questions. Using the right tags makes it easier for others to
        find and answer your question.
      </div>
      <Divider />
      <TagGridComponent tagList={tagList} />
    </div>
  );
};

export default TagsComponent;
