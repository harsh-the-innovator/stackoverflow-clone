import React from "react";
import { Card, Form, Button } from "semantic-ui-react";
import "./signupstyle.css";

const SignupComponent = () => {
  return (
    <div className="signup-container-style">
      <Card>
        <Card.Content>
          <Card.Header textAlign="center">SIGNUP</Card.Header>
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
              Signup
            </Button>
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
};

export default SignupComponent;
