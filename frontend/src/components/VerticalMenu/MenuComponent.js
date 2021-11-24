import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

const MenuComponent = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

  return (
    <Menu pointing vertical>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="questions"
        active={activeItem === "questions"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="tags"
        active={activeItem === "tags"}
        onClick={handleItemClick}
      />
    </Menu>
  );
};

export default MenuComponent;
