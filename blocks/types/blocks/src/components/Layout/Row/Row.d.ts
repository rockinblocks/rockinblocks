import React, { CSSProperties, ReactNode } from 'react';
export interface IRowProps {
    children?: ReactNode;
    display?: string;
    flexDirection?: string;
    flexWrap?: string;
    justifyContent?: string;
    style?: React.CSSProperties | undefined;
}
export declare const Row: React.FC<IRowProps & React.HTMLAttributes<HTMLDivElement> & CSSProperties>;
export default Row;
