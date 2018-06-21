import React, { Component } from "react";
import { Button, Rail, Sticky, Header, Grid, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";

class Dashboard extends Component {
  state = {};

  handleContextRef = contextRef => this.setState({ contextRef });
  render() {
    const { contextRef } = this.state;

    return (
      <div>
        <Grid centered columns={2}>
          <Grid.Column>
            <div ref={this.handleContextRef}>
              <SurveyList />
              <Rail position="right">
                <Sticky onBottom bottomOffset={50} context={contextRef} offset={800} pushing >
                  {/* <Divider hidden/> */}
                  <Link to="/surveys/new">
                    <Button.Group>
                      <Button basic color="violet" content="Create a Survey" />
                      <Button basic color="violet" icon="plus" />
                    </Button.Group>
                  </Link>
                </Sticky>
              </Rail>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
