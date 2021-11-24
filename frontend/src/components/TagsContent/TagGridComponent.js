import React from "react";
import { Grid, Segment } from "semantic-ui-react";

const TagGridComponent = ({ tagList }) => {
  return (
    <Grid columns={3}>
      {tagList.map((tag) => {
        return (
          <Grid.Column key={tag._id} textAlign="center">
            <Segment>{tag.tagname}</Segment>
          </Grid.Column>
        );
      })}
    </Grid>
  );
};

export default TagGridComponent;
