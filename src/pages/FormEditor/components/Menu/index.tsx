import React from "react";
import TabList from "./components/Tabs";
import { BreadcrumbInCreateForm } from "./components/BreadCrumb";
// import { IoMdSettings } from "react-icons/io";

const Menu: React.FC = () => {
  return (
    <header className="left-0 h-screen flex flex-col">
      <BreadcrumbInCreateForm />
      <TabList />
    </header>
  );
};

export default Menu;
