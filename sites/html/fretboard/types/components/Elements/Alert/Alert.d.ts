import { CSSProperties, FC } from "react";
export interface IAlertProps {
    text: string;
    type: string;
    link?: {
        text: string;
        location: string;
    };
    onClick?: (event: MouseEvent) => void;
}
export declare const Alert: FC<IAlertProps & CSSProperties>;
export default Alert;
