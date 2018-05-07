import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import { Button, Divider, Segment, Icon } from "semantic-ui-react";
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
          <form
            onSubmit={this.props.handleSubmit(values => console.log(values))}
          >
            {this.renderFields()}
            <Divider />
            <Link to="/surveys">
              <Button floated="left" negative>
                Cancel
                <Icon name="times" style={{ margin: "0 0 0 5px" }} />
              </Button>
            </Link>
            <Button floated="right" positive type="submit">
              Next
              <Icon name="arrow right" />
            </Button>
          </form>
        </Segment>
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm"
})(SurveyForm);
//
