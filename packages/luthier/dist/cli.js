#!/usr/bin/env node
var _a, _b;
import meow from "meow";
import { generator } from "./generator.js";
const BlockOptions = {
    flags: {
        framework: {
            type: "string",
        },
        name: {
            type: "string",
        },
    },
};
const cli = meow(`
Usage
$ luthier [input]

Options
--framework  react, vue  [Default: react]
--name       block name  [Default: Block]

Examples
$ luthier --framework=react --name=Hero
Creating Hero...
`, BlockOptions);
const options = {
    framework: (_a = String(cli === null || cli === void 0 ? void 0 : cli.flags[0])) !== null && _a !== void 0 ? _a : "react",
    name: (_b = String(cli === null || cli === void 0 ? void 0 : cli.flags[1])) !== null && _b !== void 0 ? _b : "vue",
};
console.log("Running the generator...");
generator(options);
export default cli;
