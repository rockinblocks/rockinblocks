#!/usr/bin/env node
import meow from "meow";
declare const cli: meow.Result<{
    framework: {
        type: "string";
        default: string;
    };
    name: {
        type: "string";
        default: string;
    };
}>;
export default cli;
