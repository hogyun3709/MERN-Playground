import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Header from "./Header";
const DashBoard = () => <h2>DashBoard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Container>
              <Route exact path="/" component={Landing} />
              <Route exact path="/surveys" component={DashBoard} />
              <Route path="/surveys/new" component={SurveyNew} />
            </Container>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
