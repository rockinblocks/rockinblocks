import { FC } from "react";
export interface IHeroProps {
    heading: string;
    subheading?: string;
    buttonText: string;
    buttonLink?: string;
    primaryColor?: string;
}
export declare const Hero: FC<IHeroProps>;
