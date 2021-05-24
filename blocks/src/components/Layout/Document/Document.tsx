import React, { FC } from "react";
import clsx from "clsx";
import { Box } from "..";
import styles from "./Document.scss";

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

export const Document: FC<IDocumentProps> = ({ html, frontmatter, type }) => {
  const { title } = frontmatter;
  return (
    <Box
      className={clsx(styles.document, styles[type])}
      display="flex"
    >
      <Box flex={0.8}>
        <div className={styles.document__intro}>
          <h1 className={styles.document__title}>{title}</h1>
        </div>
        <div className={styles.document__main}>
          <main>
            <div
              style={{ flex: 1 }}
              className={styles.document__html}
              dangerouslySetInnerHTML={{ __html: html }}
              data-rb="document"
            />
          </main>
        </div>
      </Box>
    </Box>
  );
};

export default Document;
