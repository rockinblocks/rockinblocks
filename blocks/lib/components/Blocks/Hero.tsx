import React, { FC } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "../Elements/Button";

export interface IHeroProps {
  heading: string;
  display:string;
  subheading: string;
  content?: string;
  buttonText1: string;
  buttonLink1?: string;
  buttonText2?: string;
  buttonLink2?: string;
  children: React.ReactNode;
}

export const Hero: FC<IHeroProps> = ({
  heading,
  display,
  subheading,
  content,
  buttonText1,
  buttonLink1,
  buttonText2,
  buttonLink2,
}) => (
  <div className="container mx-auto py-16 px-6">
    <div className="flex">
      <div className="flex flex-1 flex-col justify-center">
        <div className="mx-auto lg:mx-0">
          <div className="my-auto">
            <h1 className="text-center lg:text-left text-slate-500 uppercase">{heading}</h1>
            <p className="text-center lg:text-left text-6xl lg:text-7xl font-bold mb-6 lg:max-w-xl">{display}</p>
            <p className="text-center lg:text-left text-xl lg:text-2xl font-semibold text-slate-500 max-w-2xl mb-6 antialiased">
              {subheading}
            </p>
            <p className="text-center lg:text-left text-lg lg:text-xl text-slate-500 max-w-xl mx-auto lg:mx-0 mb-12 leading-normal antialiased">
              {content}
            </p>
          </div>
        </div>
        <Button className="lg:w-48" text={ buttonText1 } />
        { buttonText2 && (
          <Button className="lg:w-48" text={ buttonText2 } outline />
          )
        }
      </div>
    </div>
  </div>
);

export default Hero;
