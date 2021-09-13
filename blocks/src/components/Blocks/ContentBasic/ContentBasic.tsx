import React, { FC } from "react";
import ReactMarkdown from "react-markdown";
import { Container } from "@rockinblocks/rockinblocks";
import styles from "./ContentBasic.scss";

export interface IContentBasicProps {
	content: string;
}

export const ContentBasic: FC<IContentBasicProps> = ({
	content
}): JSX.Element => {
	return (
		<div className={styles.contentBasic}>
			<Container>
				<ReactMarkdown children={content} className={styles.contentBasic__content}/>
			</Container>
		</div>
	);
};

export default ContentBasic;

export const ContentBasicBlock = {
	label: "Content Basic",
	key: "hero-block",
	defaultItem: {
		contentBasic__content: "Keep on rockin' in the free world!",
		contentBasic__flexDirection: "row"
	},
	fields: [
		{ name: "contentBasic__content", label: "Content", component: "markdown" },
		{
			name: "contentBasic__flexDirection",
			label: "Flex Direction",
			component: "text"
		}
	]
};
