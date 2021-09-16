import React, { CSSProperties, FC } from "react";
import clsx from "clsx";
import { Box, Button, Container } from "../..";
import styles from "./Alert.scss";

export interface IAlertProps {
  text: string;
  type: string;
  link?: {
    text: string;
    location: string;
  };
  onClick?: () => void;
}

export const Alert: FC<IAlertProps & CSSProperties> = ({
  text,
  type,
  link,
}): JSX.Element => {
  return (
    <div className={clsx(styles.alert, type)}>
      <Container display="flex" justifyContent="space-between">
        <Box display="flex" justifyContent="center" flexDirection="column">
          <span>{text}</span>
        </Box>
        <Box>
          <Button text={link?.text} to={link?.location} />
        </Box>
      </Container>
    </div>
  );
};

export default Alert;
