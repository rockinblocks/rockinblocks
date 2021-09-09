import { FC } from "react";
export interface IHeroProps {
    heading: string;
    subheading?: string;
    buttonText: string;
    buttonLink?: string;
    primaryColor?: string;
}
export declare const Hero: FC<IHeroProps>;
export declare const HeroBlock: {
    label: string;
    key: string;
    defaultItem: {
        hero__heading: string;
        hero__subheading: string;
    };
    fields: {
        name: string;
        label: string;
        component: string;
    }[];
};
