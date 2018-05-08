import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import { Button, Divider, Segment, Icon, Form, Grid } from "semantic-ui-react";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import ErrorMessage from "./ErrorMessage";
import _ from "lodash";

//Create an object for iteration
const FIELDS = [
  {
    label: "Survey Title",
    name: "title",
    errorMessage: "Please provide Survey Title"
  },
  {
    label: "Subject Line",
    name: "subject",
    errorMessage: "Please provide Subject Line"
  },
  {
    label: "Email Body",
    name: "body",
    errorMessage: "Please provide Email Body"
  },
  {
    label: "Recipient List",
    name: "emails",
    errorMessage: "Please provide Recipient List"
  }
];

class SurveyForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }
  renderErrorMessage() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={ErrorMessage}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <Grid centered>
          <Grid.Column width={4} />
          <Grid.Column width={8}>
            <Divider hidden />
            <Segment padded="very" color="teal">
              <Form
                onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
              >
                {this.renderFields()}
                <Divider />
                <Link to="/surveys">
                  <Button floated="left" negative>
                    Cancel
                    <Icon name="remove" style={{ margin: "0 0 0 5px" }} />
                  </Button>
                </Link>
                <Button floated="right" positive type="submit">
                  Next
                  <Icon name="arrow right" />
                </Button>
                <Divider hidden />
              </Form>
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Divider hidden />
            {this.renderErrorMessage()}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  errors.emails = validateEmails(values.emails || "");
  _.each(FIELDS, ({ name, errorMessage }) => {
    if (!values[name]) {
      errors[name] = errorMessage;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
//
