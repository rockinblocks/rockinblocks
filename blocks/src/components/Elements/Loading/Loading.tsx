import React, { FC } from "react";
import { ReactComponent as Logo } from "./rockinblocks-monogram.svg";

export const Loading: FC = (): JSX.Element => {
	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				backgroundColor: "#ffffff",
				color: "rgba(56,56,56,.75)",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center"
			}}
		>
			<div style={{ textAlign: "center" }}>
				<div style={{ display: "block", margin: "0 auto", width: "4rem" }}>
					<Logo/>
				</div>
				<p>This ain't no party! This ain't no disco!</p>
			</div>
		</div>
	);
};

export default Loading;
