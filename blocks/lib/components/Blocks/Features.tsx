import React, { FC } from "react";
import { CodeBracketSquareIcon } from "@heroicons/react/24/solid";
// import background from "../../assets/background.png"

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
    <div className="bg-white px-6 py-16 lg:pt-32 lg:pb-0">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="mx-auto mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-center text-pink-500 lg:text-xl mb-4 max-w-2xl mx-auto">
          {heading}
        </h2>
        <p className="text-center text-4xl text-black font-bold max-w-2xl mx-auto mb-6">
          {subheading}
        </p>
        <p className="text-xl text-slate-500 text-center max-w-xl mb-16 leading-normal mx-auto">
          {content}
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 bg-white rounded p-6 lg:p-24">
        {items &&
          items.map(function (item) {
            return (
              <div className="flex px-2">
                <div className="pr-4">
                  <CodeBracketSquareIcon className="h-8 w-8 text-black" />
                </div>
                <div>
                  <div className="bg-white">
                    <h3 className="text-2xl font-bold mb-4">{item.heading}</h3>
                    <p className="text-lg text-slate-500 mb-8 lg:mb-0">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Features;
