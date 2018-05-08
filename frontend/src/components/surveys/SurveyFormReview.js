import React from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";

const SurveyFormReview = ({ onCancel }) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
    <Button onClick={onCancel}>Go Back</Button>
    </div>
  );
};

function mapStateToProps(state){
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps)(SurveyFormReview);
