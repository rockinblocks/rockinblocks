import React from "react";
import { useSettings } from "../../Utilities/Settings";
import { Navbar } from "@rockinblocks/gatsby-plugin-rockinblocks";

const Header: React.FC = (): JSX.Element => {
  const { appName } = useSettings();

  return (
    <header>
      <div className="header">
        <Navbar appName={appName} color={"#ffffff"} backgroundColor="#ffffff" />
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
