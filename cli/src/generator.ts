// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { GeneratorOptions } from "./declarations.js";
import { mkdir, writeFile } from "fs/promises";
import { pascalToKebab, toCamelCase } from "./utils.js";
import chalk from "chalk";

/**
 * The actual generator module
 * This is also export as default for this file
 * @param {GeneratorOptions} options Options coming from the CLI
 */
export const generator = (options: GeneratorOptions): void => {
  const { name } = options;
  generateBlockReact(name);
  console.info(
    chalk.green(`
🎸🎶🤘 Successfully created ${name}! 🤘🎶🎸
Check your ${chalk.blue("blocks/src/components/Blocks")} directory for you new block!
`),
  );
};

/**
 * Generate the Rockin' Block using React
 * @link https://rockinblocks.com/docs/v1/blocks
 * @param {string} name The name of the block, i.e. Hero
 */
const generateBlockReact = async (name: string) => {
  await generateComponentIndex(name);
  await generateComponentReact(name);
  await generateComponentScss(name);
  await generateComponentStories(name);
  await generateComponentTests(name);
};

/**
 * Creates the component directory and the index file
 * Exports the block and the type interface
 * @link https://nodejs.org/docs/latest-v15.x/api/fs.html
 * @param {string} name The name of the block, i.e. Hero
 */
const generateComponentIndex = async (name?: string) => {
  try {
    await mkdir(`src/components/Blocks/${name}`).then(() => {
      writeFile(
        `src/components/Blocks/${name}/index.ts`,
        `export { ${name} } from "./${name}"
export type { ${name}Props } from "./${name}"
`,
      );
    });
  } catch (error) {
    console.error("There was an issue creating your block.", error.message);
  }
};

/**
 * Creates the React component for the block
 * @link https://nodejs.org/docs/latest-v15.x/api/fs.html
 * @param {string} name The name of the block, i.e. Hero
 */
const generateComponentReact = async (name?: string) => {
  try {
    writeFile(
      `src/components/Blocks/${name}/${name}.tsx`,
      `import React, { FC } from "react"
import styles from "./${name}.scss"

export interface ${name}Props {
  exampleProp: string
}

export const ${name}: FC<${name}Props> = (): JSX.Element => {
  return (
    <div className={styles.${toCamelCase(name || "Block")}}>
      <p>
        <strong>${name}</strong>
      </p>
      <p>Grabbed hold of your coat tail, but it come off in my hand.</p>
      <p>I reached for your lapel, but it weren&apos;t sewn on so grand.</p>
    </div>
  )
}

export default ${name}
`,
    );
  } catch (error) {
    console.error("There was an issue creating your block.", error.message);
  }
};

/**
 * Creates the SCSS Component for the block
 * Assumes the component directly already exists
 * @link https://nodejs.org/docs/latest-v15.x/api/fs.html
 * @param {string} name The name of the block, i.e. Hero
 */
const generateComponentScss = async (name?: string) => {
  try {
    writeFile(
      `src/components/Blocks/${name}/${name}.scss`,
      `@import "../../../styles/shared";

// CSS Modules with SCSS support
.${pascalToKebab(name ?? "Block")} {
  background-color: $primary;
}
`,
    );
  } catch (error) {
    console.error("There was an error:", error.message);
  }
};

/**
 * Creates the Storybook stories for the block
 * Assumes the component directly already exists
 * @link https://nodejs.org/docs/latest-v15.x/api/fs.html
 * @param {string} name The name of the block, i.e. Hero
 */
const generateComponentStories = async (name?: string) => {
  try {
    writeFile(
      `src/components/Blocks/${name}/${name}.stories.tsx`,
      `import React from "react"
import { Story, Meta } from "@storybook/react"
import { ${name}, ${name}Props } from "./${name}"

export default {
  title: "Blocks/${name}",
  component: ${name},
} as Meta

const Template: Story<${name}Props> = args => <${name} {...args} />

export const Default = Template.bind({})
Default.args = {
  exampleProp: "Rockin' Blocks!",
}
`,
    );
  } catch (error) {
    console.error("There was an error:", error.message);
  }
};

/**
 * Creates the Jest tests for the block
 * Assumes the component directly already exists
 * @link https://nodejs.org/docs/latest-v15.x/api/fs.html
 * @param {string} name The name of the block, i.e. Hero
 */
const generateComponentTests = async (name?: string) => {
  try {
    writeFile(
      `src/components/Blocks/${name}/${name}.test.tsx`,
      `import React from "react"
import { shallow } from "enzyme"
import { ${name} } from "./${name}"

describe("<${name} />", () => {
  it("should render", () => {
    const wrapper = shallow(<${name} exampleProp="Rockin' Blocks!" />)

    expect(wrapper.html()).toBeTruthy()
  })
})
`,
    );
  } catch (error) {
    console.error("There was an error:", error.message);
  }
};

export default generator;
