import React from "react";
import { Card, Form, Button } from "semantic-ui-react";
import "./loginstyle.css";

const LoginComponent = () => {
  return (
    <div className="login-container-style">
      <Card>
        <Card.Content>
          <Card.Header textAlign="center">LOGIN</Card.Header>
          <Form>
            <Form.Field>
              <label>Username</label>
              <input placeholder="Enter username" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder="Enter password" type="password" />
            </Form.Field>
            <Button type="submit" primary>
              Login
            </Button>
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
};

export default LoginComponent;
