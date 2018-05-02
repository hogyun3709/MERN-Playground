import React from 'react';
import { Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Button icon>
        <Link to="/surveys/new"><Icon name='world' /></Link>
      </Button>
    </div>
  )
}

export default Dashboard;
