import React, { FC, CSSProperties } from "react";
export interface IContentIntroProps {
    heading: string;
    subheading?: string;
}
export declare const ContentIntro: React.FC<IContentIntroProps>;
export interface IContentSectionProps {
    heading: string;
    body: string;
    buttonText: string;
    buttonLink: string;
}
export declare const ContentSection: FC<IContentSectionProps & React.HTMLAttributes<HTMLDivElement> & CSSProperties>;
export interface IContentProps {
    heading: string;
    subheading: string;
    sections: IContentSectionProps[];
}
export declare const Content: FC<IContentProps & React.HTMLAttributes<HTMLDivElement> & CSSProperties>;
export default Content;
