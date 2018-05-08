import React from "react";
import { connect } from "react-redux";
import {
  Button,
  Divider,
  Segment,
  Icon,
  Form,
  Grid,
  Header,
  Input
} from "semantic-ui-react";
import formFields from "./formFields";
import _ from "lodash";

const SurveyFormReview = ({ onCancel, formValues }) => {
  const reviewFields = _.map(formFields, field => {
    return (
      <div key={field.name}>
        <Header size="medium">{field.label}</Header>
        <Segment size="tiny" fluid>
          {formValues[field.name]}
        </Segment>
        <br />
      </div>
    );
  });

  return (
    <div>
      <Grid centered>
        <Grid.Column width={4} />
        <Grid.Column width={8}>
          <Divider hidden />
          <Segment padded="very" color="teal">
            <h5>Please confirm your entries</h5>
            <Form>
              {reviewFields}
              <Divider />
              <Button negative floated="left" onClick={onCancel}>
                <Icon name="arrow left" />
                Go Back
              </Button>

              <Divider hidden />
            </Form>
          </Segment>
        </Grid.Column>
        <Grid.Column width={4} />
      </Grid>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps)(SurveyFormReview);
