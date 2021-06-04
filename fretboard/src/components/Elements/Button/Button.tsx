import React, { FC } from "react";
import { Link } from "gatsby";
import styles from "./Button.module.scss";

export interface IButtonProps {
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  to?: string;
  href?: string;
  onClick?: (event: MouseEvent) => void;
}

export const Button: FC<IButtonProps> = props => {
  const { text, backgroundColor, textColor, to, href } = props;

  const Wrapper: FC = ({ children }): JSX.Element => {
    if (to) {
      return (
        <Link className={styles.button} to={to}>
          {children}
        </Link>
      );
    }

    if (href) {
      return (
        <a style={{ textDecoration: "none" }} href={href}>
          {children}
        </a>
      );
    }

    return <span className={styles.button}>{children}</span>;
  };

  return (
    <Wrapper>
      <button type="button" className={styles.button}>
        <div className={styles.button__inner} style={{ backgroundColor }}>
          <span
            className={styles.button__text}
            style={{ color: textColor ?? "#ffffff" }}
            data-rb="button-text"
          >
            {text ?? "Learn More"}
          </span>
        </div>
      </button>
    </Wrapper>
  );
};
