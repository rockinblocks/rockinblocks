import React, { CSSProperties, FC } from "react";
import clsx from "clsx";
import { Box, Container } from "../../Layout";
import styles from "./Alert.module.scss";

export interface IAlertProps {
  text: string;
  type: string;
  link?: {
    text: string;
    location: string;
  };
  onClick?: (event: MouseEvent) => void;
}

export const Alert: FC<IAlertProps & CSSProperties> = ({
  text,
  type,
  link,
  onClick = null,
}): JSX.Element => {
  return (
    <div className={clsx(styles.alert, type)}>
      <Container justifyContent="space-between">
        <Box display="flex" justifyContent="center" flexDirection="column">
          <span>{text}</span>
        </Box>
        <span>
          <button type="button" {...onClick}>
            {link?.text}
          </button>
        </span>
      </Container>
    </div>
  );
};

export default Alert;
