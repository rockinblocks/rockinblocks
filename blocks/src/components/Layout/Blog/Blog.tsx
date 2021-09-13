import React from "react";
import { Navbar } from "../../Elements/Navbar";
import styles from "./Blog.scss";

export const Blog: React.FC = (): JSX.Element => {
	return (
		<div>
			<Navbar appName="Rockin' Blocks!"/>
			<h1 className={styles.pageHeading}>Rockin' Blog </h1>
			<p>The Official Rockin' Blocks Blog</p>
		</div>
	);
};

export default Blog;
