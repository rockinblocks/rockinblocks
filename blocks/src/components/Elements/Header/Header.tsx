import React from "react";
import { Navbar } from "@rockinblocks/gatsby-plugin-rockinblocks";

export const Header: React.FC = (): JSX.Element => {
  return (
    <header>
      <div className="header">
        <Navbar color={"#ffffff"} backgroundColor="#ffffff" />
      </div>
    </header>
  );
};

export const HeaderForm = {
  id: "rockin-docs-header",
  label: "Header",
  fields: [
    {
      label: "App Name",
      name: "rawJson.appName",
      description: "Name of the app",
      component: "text",
    },
  ],
  onSubmit: async () => {
    window.alert("Saved!");
  },
};

export default Header;
