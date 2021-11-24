import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

const rightItems = [
  { as: "a", content: "Login", key: "login" },
  { as: "a", content: "Register", key: "register" },
];

class NavbarComponent extends Component {
  render() {
    return (
      <div>
        <Menu fixed="top" inverted>
          <Menu.Item header>stackoverflow</Menu.Item>
          <Menu.Menu position="right">
            {rightItems.map((item) => (
              <Menu.Item {...item} />
            ))}
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default NavbarComponent;
