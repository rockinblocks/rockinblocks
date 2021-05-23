import { FC } from "react";
export interface IAlertProps {
    text: string;
    type: string;
    link?: {
        text: string;
        location: string;
    };
}
export declare const Alert: FC<IAlertProps>;
export default Alert;
