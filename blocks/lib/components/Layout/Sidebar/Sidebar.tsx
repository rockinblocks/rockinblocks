import React, { FC } from "react";
import { Link } from "gatsby";

export interface ISidebarMenuItemProps {
  title: string;
  path: string;
  order: string;
}
export interface ISidebarProps {
  menuItems: ISidebarMenuItemProps[];
}

export const Sidebar: FC<ISidebarProps> = ({ menuItems }) => {
  return (
    <div>
      <div>
        <ul>
          {menuItems?.map((menuItem: ISidebarMenuItemProps) => {
            const { path, title } = menuItem;

            return (
              <li key={path}>
                {/* <Link to={path}>{title}</Link> */}
              </li>
            );
          })}
        </ul>
        <ul>
          <li>
            <a href="https://github.com/rockinblocks/rockinblocks">GitHub</a>
          </li>
          <li>
            <a
              href="https://github.com/rockinblocks/rockinblocks/issues/new"
              target="_blank"
              rel="noreferrer"
            >
              GitHub: Create Issue
            </a>
          </li>
          <li>
            <a href="https://discord.gg/du2rWCDtRF">Discord</a>
          </li>
          <li>
            <a href="https://twitter.com/RockinBlocksJS">Twitter</a>
          </li>
          <li >
            <a href="https://reddit.com/r/rockinblocks">Reddit</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
