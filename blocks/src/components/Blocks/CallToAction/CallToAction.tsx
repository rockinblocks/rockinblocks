import React, { FC } from "react";
import styles from "./CallToAction.scss";
import ReactMarkdown from "markdown-to-jsx";
import { Button } from "../..";

export interface ICallToActionProps {
  heading: string;
  content: string;
  buttonText: string;
  buttonLink: string;
}

export const CallToAction: FC<ICallToActionProps> = (props): JSX.Element => {
  const { heading, content, buttonText, buttonLink } = props;
  return (
    <div className={styles["call-to-action"]}>
      <div className={styles["call-to-action__heading"]}>
        <p>
          <strong>{heading}</strong>
        </p>
      </div>
      <div className={styles["call-to-action__content"]}>
        <ReactMarkdown options={{ forceBlock: true }}>
          {content}
        </ReactMarkdown>
      </div>
      <div className={styles["call-to-action__action"]}>
        <Button to={buttonLink} text={buttonText} />
      </div>
    </div>
  );
};

export default CallToAction;

export const CallToActionBlock = {
  label: "Call to Action",
  key: "cta-block",
  defaultItem: {
    cta__heading: "Keep on rockin' in the free world!",
    cta__content: "Neil Young",
    cta__buttonText: "Start Rockin'",
    cta__buttonLink: "/get-started",
  },
  fields: [
    { name: "cta__heading", label: "Heading", component: "text" },
    { name: "cta__content", label: "Subheading", component: "markdown" },
    { name: "cta__buttonText", label: "Button Text", component: "text" },
    { name: "cta__buttonLink", label: "Button Link", component: "text" },
  ],
};

