import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import MenuComponent from "./components/VerticalMenu/MenuComponent";
import ContentComponent from "./components/Content/ContentComponent";
import "./app.css";
import { useNavigate, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import LoginComponent from "./components/LoginComponent/LoginComponent";
import SignupComponent from "./components/SignupComponent/SignupComponent";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);
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
      <Routes>
        <Route
          path="/*"
          element={
            <Container style={{ marginTop: "5rem" }}>
              <div className="app-content">
                <MenuComponent
                  activeTab={activeTab}
                  handleChangeActiveTab={handleChangeActiveTab}
                  style={{ height: "fit-content" }}
                />
                <ContentComponent />
              </div>
            </Container>
          }
        />
        <Route
          path="/login"
          element={isLoggedIn ? <NotFound /> : <LoginComponent />}
        />
        <Route
          path="/signup"
          element={isLoggedIn ? <NotFound /> : <SignupComponent />}
        />
      </Routes>
    </React.Fragment>
  );
};

export default App;
