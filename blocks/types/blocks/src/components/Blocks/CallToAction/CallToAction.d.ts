import { FC } from "react";
export interface ICallToActionProps {
    heading: string;
    content: string;
    buttonText: string;
    buttonLink: string;
}
export declare const CallToAction: FC<ICallToActionProps>;
export default CallToAction;
export declare const CallToActionBlock: {
    label: string;
    key: string;
    defaultItem: {
        cta__heading: string;
        cta__content: string;
        cta__buttonText: string;
        cta__buttonLink: string;
    };
    fields: {
        name: string;
        label: string;
        component: string;
    }[];
};
