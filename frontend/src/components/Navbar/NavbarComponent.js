import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

class NavbarComponent extends Component {
  render() {
    return (
      <div>
        <Menu fixed="top" inverted>
          <Menu.Item header>
            <Link to="/">stackoverflow</Link>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item name="login">
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item name="signup">
              <Link to="/signup">SignUp</Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default NavbarComponent;
