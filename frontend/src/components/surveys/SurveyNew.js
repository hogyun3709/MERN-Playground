import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFromReview from "./SurveyFormReview";
// import { Grid } from "semantic-ui-react";

class SurveyNew extends Component {
  // constructor(props){
  //   super(props);
  //
  //   this.state = { new: true};
  // }

  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return <SurveyFromReview />;
    }
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default SurveyNew;
