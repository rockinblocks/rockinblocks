import React, { CSSProperties, ReactNode } from "react";
import styles from "./Row.scss";

export interface IRowProps {
  children?: ReactNode;
  display?: string;
  flexDirection?: string;
  flexWrap?: string;
  justifyContent?: string;
  style?: React.CSSProperties | undefined;
}

export const Row: React.FC<
  IRowProps & React.HTMLAttributes<HTMLDivElement> & CSSProperties
> = (props): JSX.Element => {
  const { children, display, flexDirection, justifyContent, style } = props;
  const styleProps = {
    display,
    flexDirection,
    justifyContent,
    ...style,
  };
  return (
    <div className={styles.row} style={{ ...styleProps }}>
      {children}
    </div>
  );
};

export default Row;
