import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import MenuComponent from "./components/VerticalMenu/MenuComponent";
import ContentComponent from "./components/Content/ContentComponent";
import "./app.css";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(() => {
    let pathname = window.location.pathname.substr(1);
    return pathname;
  });

  const handleChangeActiveTab = (e, { name }) => {
    navigate(`${name === "home" ? "/" : name}`);
    setActiveTab(`${name === "home" ? "" : name}`);
  };

  return (
    <React.Fragment>
      <NavbarComponent />
      <Container style={{ marginTop: "5rem" }}>
        <div className="content">
          <MenuComponent
            activeTab={activeTab}
            handleChangeActiveTab={handleChangeActiveTab}
          />
          <ContentComponent />
        </div>
      </Container>
    </React.Fragment>
  );
};

export default App;
