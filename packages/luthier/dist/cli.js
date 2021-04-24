#!/usr/bin/env node
var _a, _b;
import meow from "meow";
import { generator } from "./generator.js";
var cli = meow("\n    Usage\n      $ luthier [input]\n\n    Options\n      --framework  react, vue       [Default: react]\n      --name       component name   [Default: Block]\n\n    Examples\n      $ luthier --framework=vue --name=Hero\n", {
    flags: {
        framework: {
            type: "string",
            default: "react",
        },
        name: {
            type: "string",
            default: "Block",
        },
    },
});
var options = {
    framework: (_a = cli === null || cli === void 0 ? void 0 : cli.flags) === null || _a === void 0 ? void 0 : _a.framework,
    name: (_b = cli === null || cli === void 0 ? void 0 : cli.flags) === null || _b === void 0 ? void 0 : _b.name,
};
generator(options);
export default cli;
