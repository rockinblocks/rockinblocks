import { FC } from 'react';
export interface IHeroProps {
    heading: string;
    subheading?: string;
    buttonText: string;
    buttonLink?: string;
    primaryColor?: string;
}
export declare const Hero: FC<IHeroProps>;
export declare const HeroForm: {
    id: string;
    label: string;
    key: string;
    fields: {
        label: string;
        name: string;
        description: string;
        component: string;
    }[];
};
