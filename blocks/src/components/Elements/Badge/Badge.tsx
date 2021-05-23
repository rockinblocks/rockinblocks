import React, { CSSProperties, FC } from "react";
import clsx from "clsx";
import styles from "./Badge.scss";

export interface IBadgeProps {
  text?: string;
  textColor?: string;
  variant?: string;
}

export const Badge: FC<IBadgeProps & CSSProperties> = (
  props: IBadgeProps
): JSX.Element => {
  const { text, textColor } = props;
  const style = {
    color: textColor,
    backgroundColor: "#fa3250",
  };

  return (
    <span className={clsx(styles.badge)} data-rb="badge">
      <p style={style}>{text}</p>
    </span>
  );
};

export default Badge;
