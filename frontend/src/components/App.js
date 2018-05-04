import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Container } from "semantic-ui-react";

import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Container>
              <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
              <Route path="/surveys/new" component={SurveyNew} />
            </Container>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
