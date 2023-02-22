import React, { FC } from "react";

export interface IDocumentFrontmatter {
  title: string;
  dateCreated: string;
  dateUpdated: string;
  keywords: string;
  path: string;
  description: string;
  type: string;
}
export interface IDocumentProps {
  frontmatter: IDocumentFrontmatter;
  html: string;
}

export const Document: FC<IDocumentProps> = ({ html, frontmatter }) => {
  const { title } = frontmatter;
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <main>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </main>
      </div>
    </div>
  );
};

export default Document;
