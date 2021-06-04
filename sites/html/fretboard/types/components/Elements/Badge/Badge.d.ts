import { CSSProperties, FC } from "react";
export interface IBadgeProps {
    text?: string;
    textColor?: string;
    variant?: string;
}
export declare const Badge: FC<IBadgeProps & CSSProperties>;
export default Badge;
