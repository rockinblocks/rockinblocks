import React, { FC } from "react";
// import { Link } from "gatsby";


export interface IButtonProps {
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  to?: string;
  href?: string;
  outline?: boolean; 
  onClick?: (event: MouseEvent) => void;
  className?: string;
}

export const Button: FC<IButtonProps> = ({ text, outline, className }) => {

  const getButtonClasses = () => {
    let classes = "p-4 mx-auto lg:mx-0 rounded-full drop-shadow-md"
    let classesArr = classes.split('');
    if(Array.isArray(classesArr)) {
      if (outline) {
        classesArr.push('border border-pink-500')
      } else {
        classesArr.push('bg-pink-500 text-white')
      }
    
    }
    return classesArr.join(' ');
  }

  const buttonClasses = getButtonClasses();

  return (
      <button className={ buttonClasses }>
        <span className="font-bold">
          { text }
        </span>
      </button>
  );
};
