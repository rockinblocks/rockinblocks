import { FC } from "react";
export interface IPostProps {
    path: string;
    title: string;
    date: string;
}
export declare const Post: FC<IPostProps>;
export default Post;
