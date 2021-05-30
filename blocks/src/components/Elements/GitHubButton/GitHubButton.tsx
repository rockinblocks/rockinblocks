import React, { FC } from "react";
import Helmet from "react-helmet";
// Import styles from "./GitHubButton.scss";

export const GitHubButton: FC = (): JSX.Element => {
  return (
    <div>
      <Helmet>
        <script async defer src="https://buttons.github.io/buttons.js" />
      </Helmet>
      <a
        className="github-button"
        href="https://github.com/rockinblocks/rockinblocks"
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Star rockinblocks/rockinblocks on GitHub"
      >
        Star
      </a>
    </div>
  );
};

export default GitHubButton;
