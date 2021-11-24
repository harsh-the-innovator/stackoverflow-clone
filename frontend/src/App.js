import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import MenuComponent from "./components/VerticalMenu/MenuComponent";
import ContentComponent from "./components/Content/ContentComponent";
import "./app.css";
import { useNavigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

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
    <AuthProvider>
      <React.Fragment>
        <NavbarComponent />
        <Container style={{ marginTop: "5rem" }}>
          <div className="app-content">
            <MenuComponent
              activeTab={activeTab}
              handleChangeActiveTab={handleChangeActiveTab}
            />
            <ContentComponent />
          </div>
        </Container>
      </React.Fragment>
    </AuthProvider>
  );
};

export default App;
