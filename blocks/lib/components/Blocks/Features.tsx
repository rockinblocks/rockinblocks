import React, { FC } from "react";
import { CodeBracketSquareIcon } from '@heroicons/react/24/solid'

export interface IFeaturesItemProps {
  heading: string;
  content: string;
}

export interface IFeaturesProps {
  heading: string;
  subheading: string;
  content: string;
  items: Array<IFeaturesItemProps>;
}

export const Features: FC<IFeaturesProps> = (props): JSX.Element => {
  const { heading, subheading, content, items } = props;
  return (
    <div className="bg-white lg:py-32">
      <div className="container mx-auto">
        <h2 className="text-center text-red-500 lg:text-xl mb-4 max-w-2xl mx-auto">{ heading }</h2>
        <p className="text-center text-4xl text-black font-bold max-w-2xl mx-auto mb-6">
          { subheading }
        </p>
        <p className="text-xl text-slate-500 text-center max-w-xl mb-16 leading-normal mx-auto">
          { content }
        </p>
      </div>
      <div className="container lg:max-w-7xl mx-auto grid grid-cols-4 gap-4">
        {items &&
          items.map(function(item){
            return (
              <div className="flex px-2">
                <div className="pr-4">
                  <CodeBracketSquareIcon className="h-8 w-8 text-black"/>
                </div>
                <div>
                  <div className="bg-white">
                    <h3 className="text-2xl font-bold mb-4">{ item.heading }</h3>
                    <p className="text-lg text-slate-500">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  );
};

export default Features;