import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Input, Button } from "semantic-ui-react";

class SurveyForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          <Field type="text" name="surveyTitle" component={Input} />
          <Button positive type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm"
})(SurveyForm);
