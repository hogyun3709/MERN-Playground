import React from "react";
import { Button } from "semantic-ui-react";

const SurveyFormReview = ({ onCancel }) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
    <Button onClick={onCancel}>Go Back</Button>
    </div>
  );
};

export default SurveyFormReview;
