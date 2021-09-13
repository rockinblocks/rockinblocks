import React, { FC } from "react";
import { Post } from "../../Elements";
import styles from "./Posts.scss";

export interface PostNode {
	node: {
		frontmatter: PostFrontmatter;
	};
}

export interface PostFrontmatter {
	path: string;
	title: string;
	date: string;
}

export interface IPostsProps {
	posts: PostNode[];
}

export const Posts: FC<IPostsProps> = ({ posts }): JSX.Element => (
	<div className={styles.posts}>
		<h1>The Rockin' Blog</h1>
		{posts?.map(({ node }: PostNode) => {
			const { path, title, date }: PostFrontmatter = node.frontmatter;
			return (
				<div key={title} className={styles.posts__post}>
					<Post path={path} title={title} date={date}/>
				</div>
			);
		})}
	</div>
);

export default Posts;
