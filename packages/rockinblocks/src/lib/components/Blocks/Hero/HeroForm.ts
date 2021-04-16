export const HeroForm = {
  id: "rockin-docs-builder-hero",
  label: "Hero",
  key: "builder-hero",
  fields: [
    {
      label: "SEO Heading",
      name: "rawJson.seoHeading",
      description: "Heading for SEO. This will be set as the H1.",
      component: "text",
    },
    {
      label: "Hero Heading",
      name: "rawJson.heading",
      description: "Heading for the hero.",
      component: "text",
    },
    {
      label: "Hero Subheading",
      name: "rawJson.subheading",
      description: "Subheading for the hero.",
      component: "textarea",
    },
    {
      label: "Hero Button Text",
      name: "rawJson.buttonText",
      description: "Text for the hero button.",
      component: "text",
    },
    {
      label: "Hero Button Text",
      name: "rawJson.buttonLink",
      description: "URL for the hero button link.",
      component: "text",
    },
    {
      label: "Hero Image",
      name: "rawJson.image",
      description: "Image for the hero",
      component: "image",
    },
  ],
}

export default HeroForm
