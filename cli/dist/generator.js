var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { mkdir, writeFile } from "fs/promises";
import { pascalToKebab, toCamelCase } from "./utils.js";
import chalk from "chalk";
/**
 * The actual generator module
 * This is also export as default for this file
 * @param {GeneratorOptions} options Options coming from the CLI
 */
export var generator = function (options) {
    var name = options.name;
    generateBlockReact(name);
    console.info(chalk.green("\n\uD83C\uDFB8\uD83C\uDFB6\uD83E\uDD18 Successfully created " + name + "! \uD83E\uDD18\uD83C\uDFB6\uD83C\uDFB8\nCheck your " + chalk.blue("blocks/src/components/Blocks") + " directory for you new block!\n"));
};
/**
 * Generate the Rockin' Block using React
 * @link https://rockinblocks.com/docs/v1/blocks
 * @param {string} name The name of the block, i.e. Hero
 */
var generateBlockReact = function (name) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, generateComponentIndex(name)];
            case 1:
                _a.sent();
                return [4 /*yield*/, generateComponentReact(name)];
            case 2:
                _a.sent();
                return [4 /*yield*/, generateComponentScss(name)];
            case 3:
                _a.sent();
                return [4 /*yield*/, generateComponentStories(name)];
            case 4:
                _a.sent();
                return [4 /*yield*/, generateComponentTests(name)];
            case 5:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
/**
 * Creates the component directory and the index file
 * Exports the block and the type interface
 * @link https://nodejs.org/docs/latest-v15.x/api/fs.html
 * @param {string} name The name of the block, i.e. Hero
 */
var generateComponentIndex = function (name) { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, mkdir("src/components/Blocks/" + name).then(function () {
                        writeFile("src/components/Blocks/" + name + "/index.ts", "export { " + name + " } from \"./" + name + "\"\nexport type { " + name + "Props } from \"./" + name + "\"\n");
                    })];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error("There was an issue creating your block.", error_1.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
/**
 * Creates the React component for the block
 * @link https://nodejs.org/docs/latest-v15.x/api/fs.html
 * @param {string} name The name of the block, i.e. Hero
 */
var generateComponentReact = function (name) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            writeFile("src/components/Blocks/" + name + "/" + name + ".tsx", "import React, { FC } from \"react\"\nimport styles from \"./" + name + ".scss\"\n\nexport interface " + name + "Props {\n  exampleProp: string\n}\n\nexport const " + name + ": FC<" + name + "Props> = (): JSX.Element => {\n  return (\n    <div className={styles." + toCamelCase(name || "Block") + "}>\n      <p>\n        <strong>" + name + "</strong>\n      </p>\n      <p>Grabbed hold of your coat tail, but it come off in my hand.</p>\n      <p>I reached for your lapel, but it weren&apos;t sewn on so grand.</p>\n    </div>\n  )\n}\n\nexport default " + name + "\n");
        }
        catch (error) {
            console.error("There was an issue creating your block.", error.message);
        }
        return [2 /*return*/];
    });
}); };
/**
 * Creates the SCSS Component for the block
 * Assumes the component directly already exists
 * @link https://nodejs.org/docs/latest-v15.x/api/fs.html
 * @param {string} name The name of the block, i.e. Hero
 */
var generateComponentScss = function (name) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            writeFile("src/components/Blocks/" + name + "/" + name + ".scss", "@import \"../../../styles/shared\";\n\n// CSS Modules with SCSS support\n." + pascalToKebab(name !== null && name !== void 0 ? name : "Block") + " {\n  background-color: $primary;\n}\n");
        }
        catch (error) {
            console.error("There was an error:", error.message);
        }
        return [2 /*return*/];
    });
}); };
/**
 * Creates the Storybook stories for the block
 * Assumes the component directly already exists
 * @link https://nodejs.org/docs/latest-v15.x/api/fs.html
 * @param {string} name The name of the block, i.e. Hero
 */
var generateComponentStories = function (name) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            writeFile("src/components/Blocks/" + name + "/" + name + ".stories.tsx", "import React from \"react\"\nimport { Story, Meta } from \"@storybook/react\"\nimport { " + name + ", " + name + "Props } from \"./" + name + "\"\n\nexport default {\n  title: \"Blocks/" + name + "\",\n  component: " + name + ",\n} as Meta\n\nconst Template: Story<" + name + "Props> = args => <" + name + " {...args} />\n\nexport const Default = Template.bind({})\nDefault.args = {\n  exampleProp: \"Rockin' Blocks!\",\n}\n");
        }
        catch (error) {
            console.error("There was an error:", error.message);
        }
        return [2 /*return*/];
    });
}); };
/**
 * Creates the Jest tests for the block
 * Assumes the component directly already exists
 * @link https://nodejs.org/docs/latest-v15.x/api/fs.html
 * @param {string} name The name of the block, i.e. Hero
 */
var generateComponentTests = function (name) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            writeFile("src/components/Blocks/" + name + "/" + name + ".test.tsx", "import React from \"react\"\nimport { shallow } from \"enzyme\"\nimport { " + name + " } from \"./" + name + "\"\n\ndescribe(\"<" + name + " />\", () => {\n  it(\"should render\", () => {\n    const wrapper = shallow(<" + name + " exampleProp=\"Rockin' Blocks!\" />)\n\n    expect(true).toBeTruthy()\n  })\n})\n");
        }
        catch (error) {
            console.error("There was an error:", error.message);
        }
        return [2 /*return*/];
    });
}); };
export default generator;
