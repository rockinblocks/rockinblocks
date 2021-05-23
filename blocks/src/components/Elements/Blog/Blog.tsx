import React from "react";
import { Navbar } from "../Navbar";
import styles from "./Blog.scss";

export const Blog = () => {
  return (
    <>
      <Navbar appName="Rockin' Docs!" />
      <h1 className={styles.pageHeading}>Rockin' Blog </h1>
      <p>The Official Rockin' Blocks Blog</p>
    </>
  );
};
