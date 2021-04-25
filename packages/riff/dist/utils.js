/**
 * Covert Pascal case (BlogPost) to kebab case (blog-post)
 * @param string String in Pascal case to convert to kebab case
 * @returns String as kebab case
 */
export var pascalToKebab = function (string) {
    return string
        .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
        .replace(/([A-Z])([A-Z])(?=[a-z])/g, "$1-$2")
        .toLowerCase();
};
/**
 * Camel case any string
 * @param string String to camel case
 * @returns String as a camel case
 */
export var toCamelCase = function (string) {
    string = string.replace(/[-_\s.]+(.)?/g, function (_, c) {
        return c ? c.toUpperCase() : "";
    });
    return string.substr(0, 1).toLowerCase() + string.substr(1);
};
