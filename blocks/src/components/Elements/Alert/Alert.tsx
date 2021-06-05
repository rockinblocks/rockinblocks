import React, { CSSProperties, FC } from "react";
import clsx from "clsx";
import { Box, Container } from "../../Layout";
import styles from "./Alert.scss";

export interface IAlertProps {
  text: string;
  type: string;
  link?: {
    text: string;
    location: string;
  };
  onClick?: Function
}

export const Alert: FC<IAlertProps & CSSProperties> = ({
  text,
  type,
  link,
  onClick = null,
}): JSX.Element => {
  return (
    <div className={clsx(styles.alert, type)}>
      <Container display="flex" justifyContent="space-between">
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
        >
          <span>{text}</span>
        </Box>
        <Box>
          <button type="button" onClick={onClick ? onClick() : null}>
            {link?.text}
          </button>
        </Box>
      </Container>
    </div>
  );
};

export default Alert;
