import React, { FC } from "react";
import { Button } from "..";

export interface IFeaturesProps {
  heading: string;
  subheading: string;
  content: string;
}

export const Features: FC<IFeaturesProps> = (props): JSX.Element => {
  const { heading, subheading, content } = props;
  return (
    <div className="bg-white lg:py-16">
      <div className="container mx-auto">
        <h2 className="text-center text-red-500 lg:text-xl font-bold mb-6 max-w-2xl mx-auto">{ heading }</h2>
        <p className="text-center text-4xl text-black font-bold max-w-2xl mx-auto mb-6">
          { subheading }
        </p>
        <p className="text-xl text-slate-500 text-center max-w-xl mb-6 leading-normal mx-auto">
          { content }
        </p>
      </div>
    </div>
  );
};

export default Features;