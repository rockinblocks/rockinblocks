#!/usr/bin/env node
import meow from "meow";
import { generator } from "./generator.js";
// import { GeneratorOptions } from "./declarations.d.js";
const cli = meow(`
    Usage
      $ luthier [input]

    Options
      --framework  react, vue       [Default: react]
      --name       component name   [Default: Block]

    Examples
      $ luthier --framework=vue --name=Hero
`, {
    flags: {
        framework: {
            type: "string",
            default: "rainbows",
        },
        name: {
            type: "string",
            default: "Block",
        },
    },
});
const options = {
    framework: cli.flags.framework,
    name: cli.flags.name,
};
// const options = {
//   framework: "vue",
//   name: "Card",
// };
generator(options);
export default cli;
