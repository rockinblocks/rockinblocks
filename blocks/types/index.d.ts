// NPM Package
declare module "@mecum/ui";

// SCSS
declare module '*.scss' {
	const classes: Record<string, string>;
	export default classes;
}

// SVG
declare module "*.svg";

// Layout
export type { IBoxProps } from "../src/components/Layout/Box";
export type { IColProps } from "../src/components/Layout/Col";
export type { IContainerProps } from "../src/components/Layout/Container";

// Elements
export type { INavbarProps } from "../src/components/Elements/Navbar";
export type { IButtonProps } from "../src/components/Elements/Button";
export type { IDocumentProps } from "../src/components/Elements/Document";
export type { ISidebarProps } from "../src/components/Elements/Sidebar";

// Blocks
export type { IHeroProps } from "../src/components/Blocks/Hero";
