// Create a class for the element
export class Hero extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });

    // Create spans
    const hero = document.createElement("div");
    hero.setAttribute("class", "hero");

    const heading = document.createElement("h1");
    heading.setAttribute("class", "hero__heading");

    // Take attribute content and put it inside the info span
    const headingText = this.getAttribute("heading");
    heading.textContent = headingText;

    // Create some CSS to apply to the shadow dom
    const style = document.createElement("style");

    style.textContent = `
      .hero {
        background-color: #333333;
				color: #ffffff;
				font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      }
    `;

    // Attach the created elements to the shadow dom
    shadow.append(style);
    shadow.append(hero);
  }
}

export default Hero;
