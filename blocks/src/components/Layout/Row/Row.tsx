import React, { CSSProperties, ReactNode } from "react";
import styles from "./Row.scss";
import clsx from "clsx"

export interface IRowProps {
  className?: string;
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
  const { className, children, display, flexDirection, flexWrap, justifyContent, style } =
    props;
  const styleProps = {
    display,
    flexDirection,
    flexWrap,
    justifyContent,
    ...style,
  };
  return (
    <div className={ clsx([className, styles.row]) } style={{ ...styleProps }}>
      {children}
    </div>
  );
};

export default Row;
