import React, { FC } from "react";
import { Link } from "gatsby";
import styles from "./Post.module.scss";

export interface IPostProps {
  path: string;
  title: string;
  date: string;
}

export const Post: FC<IPostProps> = ({ path, title, date }): JSX.Element => {
  return (
    <div className={styles.post}>
      <article key={path}>
        <header>
          <div className={styles.post__body}>
            <h3 className={styles.post__title}>
              <Link
                className={styles.post__link}
                style={{ boxShadow: "none" }}
                to={path}
              >
                {title}
              </Link>
            </h3>
            <p className={styles.post__date}>{date}</p>
          </div>
        </header>
      </article>
    </div>
  );
};

export default Post;
