import React from "react";
import TabList from "./components/Tabs";

const Menu: React.FC = () => {
  return (
    <header className="left-0 h-screen flex flex-col">
      <TabList />
    </header>
  );
};

export default Menu;
