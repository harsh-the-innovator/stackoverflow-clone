import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import MenuComponent from "./components/VerticalMenu/MenuComponent";
import ContentComponent from "./components/Content/ContentComponent";
import "./app.css";
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavbarComponent />
        <Container style={{ marginTop: "5rem" }}>
          <div className="content">
            <MenuComponent />
            <ContentComponent />
          </div>
        </Container>
      </React.Fragment>
    );
  }
}
