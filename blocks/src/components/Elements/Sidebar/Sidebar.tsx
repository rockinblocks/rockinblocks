import React, { FC } from "react";
import { Link } from "gatsby";
import styles from "./Sidebar.scss";

export interface ISidebarMenuItem {
	title: string;
	path: string;
	order: string;
}
export interface ISidebarProps {
	menuItems: ISidebarMenuItem[];
}

export const Sidebar: FC<ISidebarProps> = ({ menuItems }) => {
	return (
		<div className={styles.sidebar}>
			<div className={styles["sidebar__navigation-wrapper"]}>
				<ul className={styles.sidebar__navigation}>
					{menuItems?.map((menuItem: ISidebarMenuItem) => {
						const { path, title } = menuItem;

						return (
							<li key={path} className={styles["sidebar__nav-item-top"]}>
								<Link to={path}>{title}</Link>
							</li>
						);
					})}
				</ul>
				<ul className={styles.sidebar__navigation}>
					<li className={styles["sidebar__nav-item-top"]}>
						<a href="https://github.com/rockinblocks/rockinblocks">GitHub</a>
					</li>
					<li className={styles["sidebar__nav-item-top"]}>
						<a
							href="https://github.com/rockinblocks/rockinblocks/issues/new"
							target="_blank"
							rel="noreferrer"
						>
							GitHub: Create Issue
						</a>
					</li>
					<li className={styles["sidebar__nav-item-top"]}>
						<a href="https://discord.gg/du2rWCDtRF">Discord</a>
					</li>
					<li className={styles["sidebar__nav-item-top"]}>
						<a href="https://twitter.com/RockinBlocksJS">Twitter</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
