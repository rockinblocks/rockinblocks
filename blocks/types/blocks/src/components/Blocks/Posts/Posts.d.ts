import { FC } from "react";
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
export declare const Posts: FC<IPostsProps>;
export default Posts;
