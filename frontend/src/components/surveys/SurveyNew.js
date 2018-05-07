import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import { Grid } from "semantic-ui-react";

class SurveyNew extends Component {
  render() {
    return (
      <div>
        <Grid centered>
          <Grid.Column width={8}>
            <SurveyForm />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default SurveyNew;
