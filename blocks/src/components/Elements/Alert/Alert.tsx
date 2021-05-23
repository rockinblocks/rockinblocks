import React, { FC } from "react";
import clsx from "clsx";
import { Container } from "../../Layout";
import styles from "./Alert.scss";

export interface IAlertProps {
  text: string;
  type: string;
  link?: {
    text: string;
    location: string;
  };
}

export const Alert: FC<IAlertProps> = ({ text, type, link }): JSX.Element => {
  return (
    <div className={clsx(styles.alert, type)}>
      <Container justifyContent="space-between">
        <span>{text}</span>
        <span>
          <a href={link?.location}>
            {link?.text}
          </a>
        </span>
      </Container>
    </div>
  );
};

export default Alert;
