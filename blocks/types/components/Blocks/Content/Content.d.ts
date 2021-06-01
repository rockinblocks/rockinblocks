import React, { FC, CSSProperties } from "react";
import { IContentSectionProps } from "./ContentSection";
export interface IContentProps {
    heading: string;
    subheading: string;
    sections: IContentSectionProps[];
}
export declare const Content: FC<IContentProps & React.HTMLAttributes<HTMLDivElement> & CSSProperties>;
export default Content;
