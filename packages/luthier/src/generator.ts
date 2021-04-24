import { GeneratorOptions } from "./declarations.d.js";
import { mkdir, writeFile } from "fs/promises";

export const generator = (options: GeneratorOptions): void => {
  const { name } = options;
  generateReactBlock(name);
};

const generateReactBlock = async (name?: string) => {
  try {
    await mkdir(`src/${name}`).then(() => {
      writeFile(
        `src/${name}/${name}.tsx`,
        `
import React from "react";
`,
      );
    });
  } catch (error) {
    console.error("there was an error:", error.message);
  }
};

// const generateVueBlock = (name?: string) => {
//   console.log(`Generating Vue block: ${name}...`);
// };

export default generator;
