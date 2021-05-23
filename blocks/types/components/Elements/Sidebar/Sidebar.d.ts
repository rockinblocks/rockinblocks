import { FC } from "react";
export interface ISidebarMenuItem {
    title: string;
    path: string;
    order: string;
}
export interface ISidebarProps {
    menuItems: ISidebarMenuItem[];
}
export declare const Sidebar: FC<ISidebarProps>;
export default Sidebar;
