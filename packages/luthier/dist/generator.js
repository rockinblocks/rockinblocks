export const generator = (options) => {
    const { framework, name } = options;
    console.log({ options });
    return;
    console.log("Generating the component...");
    console.log(`Framework: ${framework}`);
    switch (framework) {
        case "react":
            console.log("Generating the React component...");
            generateReactBlock(name);
            break;
        case "vue":
            console.log("Generating the Vue component...");
            generateVueBlock(name);
            break;
        default:
            break;
    }
};
const generateReactBlock = (name) => {
    console.log(`Generating React block: ${name}...`);
};
const generateVueBlock = (name) => {
    console.log(`Generating Vue block: ${name}...`);
};
export default generator;
