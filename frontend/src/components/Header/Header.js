import React, { Component } from "react";
import { Container, Button, Dropdown, Menu } from "semantic-ui-react";

export default class Header extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu size="large">
        <Container>
          <Menu.Item header>Our Company</Menu.Item>
          <Menu.Item
            name="aboutUs"
            active={activeItem === "aboutUs"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="jobs"
            active={activeItem === "jobs"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="locations"
            active={activeItem === "locations"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Dropdown item text="Language">
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>
              <Button primary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}
