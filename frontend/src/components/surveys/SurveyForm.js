import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import { Button, Divider, Segment, Icon, Form } from "semantic-ui-react";
import SurveyField from "./SurveyField";
import _ from "lodash";

//Create an object for iteration
const FIELDS = [
  { label: "Survey Title", name: "title" },
  { label: "Subject Line", name: "subject" },
  { label: "Email Body", name: "body" },
  { label: "Recipient List", name: "emails" }
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
  render() {
    return (
      <div>
        <Divider hidden/>
        <Segment padded="very" color="teal">
          <Form
            onSubmit={this.props.handleSubmit(values => console.log(values))}
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
            <Divider hidden/>
        </Form>
        </Segment>
      </div>
    );
  }
}

function validate(values){
  const errors = {};

  if(!values.title){
    errors.title = 'You must provide a title'
  }

  return errors
}


export default reduxForm({
  validate,
  form: "surveyForm"
})(SurveyForm);
//
