import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Button } from "semantic-ui-react";
import SurveyField from "./SurveyField";

class SurveyForm extends Component {
  renderFields(){
    return (
      <div>
        <Field type="text" name="title" component={ SurveyField }/>
      </div>
    )
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Button positive type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm"
})(SurveyForm);
//
