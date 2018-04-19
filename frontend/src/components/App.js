import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import { Button, Icon } from "semantic-ui-react";

import Header from "base/Header";
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
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={DashBoard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

{
  /* <header className="App-header">
  <h1 className="App-title">Welcome to React</h1>
</header>
<p className="App-intro">
  To get started, edit <code>src/App.js</code> and save to reload.
</p>
<Button primary>Primary</Button>
<Button secondary>Secondary</Button>
<Button animated>
  <Button.Content visible>Next</Button.Content>
  <Button.Content hidden>
    <Icon name="right arrow" />
  </Button.Content>
</Button>
<Button animated="vertical">
  <Button.Content hidden>Shop</Button.Content>
  <Button.Content visible>
    <Icon name="shop" />
  </Button.Content>
</Button>
<Button animated="fade">
  <Button.Content visible>Sign-up for a Pro account</Button.Content>
  <Button.Content hidden>$12.99 a month</Button.Content>
</Button>
<a href="/auth/google">Sign In with Google</a> */
}
