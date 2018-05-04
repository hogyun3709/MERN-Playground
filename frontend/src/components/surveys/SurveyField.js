import React from "react";
import { Input, Header } from "semantic-ui-react";

export default ({ input, label }) => {
  return (
    <div>
      <Header size="medium">{label}</Header>
      <Input fluid {...input} />
      <br />
    </div>
  );
};
