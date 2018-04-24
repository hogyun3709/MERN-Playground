import React, { Component } from 'react';
import { Button } from "semantic-ui-react";
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  render(){
    return (
      <StripeCheckout
        name="DesignGround"
        description="$5 for 5 credits"
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <Button basic color='green'>
          Add Credits
        </Button>
      </StripeCheckout>
    );
  }
}
export default Payments;
