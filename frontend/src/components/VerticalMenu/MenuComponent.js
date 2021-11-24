import React from "react";
import { Menu } from "semantic-ui-react";

const MenuComponent = ({ activeTab, handleChangeActiveTab }) => {
  return (
    <Menu pointing vertical>
      <Menu.Item
        name="home"
        active={activeTab === ""}
        onClick={handleChangeActiveTab}
      />
      <Menu.Item
        name="questions"
        active={activeTab === "questions"}
        onClick={handleChangeActiveTab}
      />
      <Menu.Item
        name="tags"
        active={activeTab === "tags"}
        onClick={handleChangeActiveTab}
      />
    </Menu>
  );
};

export default MenuComponent;
