import React, { CSSProperties, ReactNode } from "react";
export interface IContainerProps {
    children?: ReactNode;
    display?: string;
    flex?: number | string;
    flexDirection?: string;
    justifyContent?: string;
    style?: CSSProperties;
}
export declare const Container: React.FC<IContainerProps & React.HTMLAttributes<HTMLDivElement> & CSSProperties>;
export default Container;
