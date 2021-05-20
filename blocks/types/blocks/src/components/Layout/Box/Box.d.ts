import React, { CSSProperties, ReactNode } from 'react';
export interface IBoxProps {
    children?: ReactNode;
    display?: string;
    flex?: number | string;
    flexDirection?: string;
    justifyContent?: string;
    style?: CSSProperties | undefined;
}
export declare const Box: React.FC<IBoxProps & React.HTMLAttributes<HTMLDivElement> & CSSProperties>;
export default Box;
