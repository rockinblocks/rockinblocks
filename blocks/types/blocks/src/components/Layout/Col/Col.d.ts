import React, { CSSProperties, ReactNode } from 'react';
export interface IColProps {
    children?: ReactNode;
    display?: string;
    flex?: number | string;
    flexDirection?: string;
    justifyContent?: string;
    style?: CSSProperties;
}
export declare const Col: React.FC<IColProps & React.HTMLAttributes<HTMLDivElement> & CSSProperties>;
export default Col;
