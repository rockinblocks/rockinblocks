#!/usr/bin/env node
import meow, { Options, AnyFlags } from "meow";
import { generator } from "./generator.js";
import { GeneratorOptions } from "./declarations.d.js";

const BlockOptions: Options<AnyFlags> = {
  flags: {
    framework: {
      type: "string",
    },
    name: {
      type: "string",
    },
  },
};

const cli = meow(
  `
Usage
$ luthier [input]

Options
--framework  react, vue  [Default: react]
--name       block name  [Default: Block]

Examples
$ luthier --framework=react --name=Hero
Creating Hero...
`,
  BlockOptions,
);

const options: GeneratorOptions = {
  framework: String(cli?.flags[0]) ?? "react",
  name: String(cli?.flags[1]) ?? "vue",
};

console.log("Running the generator...");

generator(options);

export default cli;
