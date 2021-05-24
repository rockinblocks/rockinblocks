import { FC } from "react";
export interface IDocumentFrontmatter {
    title: string;
    date_created: string;
    date_updated: string;
    keywords: string;
    path: string;
    description: string;
    type: string;
}
export interface IDocumentProps {
    frontmatter: IDocumentFrontmatter;
    html: string;
    type: string;
}
export declare const Document: FC<IDocumentProps>;
export default Document;
