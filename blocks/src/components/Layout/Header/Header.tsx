import React from "react";
import { Navbar } from "../..";

export const Header: React.FC = (): JSX.Element => {
  return (
    <header>
      <div className="header">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
