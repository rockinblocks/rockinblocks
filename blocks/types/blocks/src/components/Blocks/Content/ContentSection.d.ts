import React, { CSSProperties, FC } from "react";
export interface IContentSectionProps {
    heading: string;
    body: string;
    buttonText: string;
    buttonLink: string;
}
export declare const ContentSection: FC<IContentSectionProps & React.HTMLAttributes<HTMLDivElement> & CSSProperties>;
