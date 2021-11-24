import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider.js";

const NavbarComponent = () => {
  const { isLoggedIn, logout } = useAuth();
  return (
    <div>
      <Menu fixed="top" inverted>
        <Menu.Item header>
          <Link to="/">stackoverflow</Link>
        </Menu.Item>
        {(isLoggedIn && (
          <Menu.Menu position="right">
            <Menu.Item name="logout" onClick={() => logout()}>
              <Link to="/">Logout</Link>
            </Menu.Item>
          </Menu.Menu>
        )) || (
          <Menu.Menu position="right">
            <Menu.Item name="login">
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item name="signup">
              <Link to="/signup">SignUp</Link>
            </Menu.Item>
          </Menu.Menu>
        )}
      </Menu>
    </div>
  );
};

export default NavbarComponent;
