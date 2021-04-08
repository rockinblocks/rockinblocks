#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import meow from "meow";
import App from "./ui";

const cli = meow(
	`
	Usage
	  $ riff

	Options
		--name  Your name

	Examples
	  $ riff --name=Jane
	  Hello, Jane
`,
	{
		flags: {
			name: {
				type: "string",
			},
		},
	}
);

render(<App name={cli.flags.name} />);
