import React, { FC } from "react";
// import { Link } from "gatsby";


export interface IButtonProps {
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  to?: string;
  href?: string;
  onClick?: (event: MouseEvent) => void;
  className?: string;
}

export const Button: FC<IButtonProps> = props => {
  return (
      <button className="bg-red-500 p-4 lg:w-48 rounded-full drop-shadow">
        <span className="text-white font-bold">
          Start a Project
        </span>
      </button>
  );
};
