import React, { useState } from "react";
import { Card, Form, Button } from "semantic-ui-react";
import "./loginstyle.css";
import axios from "../../utils/axiosconfig";
import { useAuth } from "../../context/AuthProvider";

const LoginComponent = () => {
  const { setUser } = useAuth();
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
      const result = await axios.post("/login", requestBody);
      if (result.status === 200 && result.statusText === "OK") {
        const { data } = result;
        setBtnLoading(false);
        setUser({ ...data.userInfo, token: data.token });
        alert(data.message);
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
    <div className="login-container-style">
      <Card>
        <Card.Content>
          <Card.Header textAlign="center">LOGIN</Card.Header>
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
              Login
            </Button>
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
};

export default LoginComponent;
