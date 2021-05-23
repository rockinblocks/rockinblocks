import { FC } from "react";
export interface IButtonProps {
    text?: string;
    backgroundColor?: string;
    textColor?: string;
    to?: string;
}
export declare const Button: FC<IButtonProps>;
