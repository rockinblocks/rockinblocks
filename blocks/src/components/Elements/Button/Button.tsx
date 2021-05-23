import React, { FC } from "react";
import { Link } from "gatsby";
import styles from "./Button.scss";

export interface IButtonProps {
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  to?: string;
  onClick?: (event: MouseEvent) => void;
}

export const Button: FC<IButtonProps> = props => {
  const { text, backgroundColor, textColor, to } = props;

  const Wrapper: FC = ({ children }): JSX.Element => {
    if (to) {
      return (
        <Link className={styles.button} to={to}>
          {children}
        </Link>
      );
    }

    return <span className={styles.button}>{children}</span>;
  };

  return (
    <Wrapper>
      <div className={styles.button__inner} style={{ backgroundColor }}>
        <button
          className={styles.button__text}
          style={{ color: textColor ?? "#ffffff" }}
          data-rb="button-text"
          type="button"
        >
          {text ?? "Learn More"}
        </button>
      </div>
    </Wrapper>
  );
};
