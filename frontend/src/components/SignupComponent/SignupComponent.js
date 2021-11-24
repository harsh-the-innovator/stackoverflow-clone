import React, { useState } from "react";
import { Card, Form, Button } from "semantic-ui-react";
import "./signupstyle.css";
import axios from "../../utils/axiosconfig";

const SignupComponent = () => {
  const [btnloading, setBtnLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    const requestBody = JSON.stringify({
      username: username.value,
      password: password.value,
    });
    try {
      setBtnLoading(true);
      const result = await axios.post("/signup", requestBody);
      if (result.status === 200 && result.statusText === "OK") {
        setBtnLoading(false);
        alert(result.data.message);
        username.value = "";
        password.value = "";
      } else {
        throw new Error("Some error occured");
      }
    } catch (err) {
      console.log(err.response);
      setBtnLoading(false);
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert(err.message);
      }
    }
  };
  return (
    <div className="signup-container-style">
      <Card>
        <Card.Content>
          <Card.Header textAlign="center">SIGNUP</Card.Header>
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label>Username</label>
              <input placeholder="Enter username" name="username" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                placeholder="Enter password"
                type="password"
                name="password"
              />
            </Form.Field>
            <Button
              type="submit"
              primary
              loading={btnloading}
              disabled={btnloading}
            >
              Signup
            </Button>
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
};

export default SignupComponent;
