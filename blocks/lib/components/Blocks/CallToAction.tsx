import React, { FC } from "react";
import { Button } from "..";

export interface ICallToActionProps {
  heading: string;
  content: string;
  buttonText: string;
  buttonLink: string;
}

export const CallToAction: FC<ICallToActionProps> = (props): JSX.Element => {
  const { heading, content, buttonText, buttonLink } = props;
  return (
    <div className="bg-slate-50 lg:py-32">
      <div className="container mx-auto">
        <h2 className="text-center lg:text-6xl font-bold mb-6 max-w-2xl mx-auto leading-loose">{ heading }</h2>
        <p className="text-center text-2xl text-slate-500 max-w-xl mx-auto mb-6">
          { content }
        </p>
        <div className="text-center">
          <Button text="Start Rocking" />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;