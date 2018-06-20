import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";

const Dashboard = () => {
  return (
    <div>
      <SurveyList />
      <Button icon>
        <Link to="/surveys/new">
          <Icon name="world" />
        </Link>
      </Button>
    </div>
  );
};

export default Dashboard;
