export const ContentSectionForm = {
  id: "rockin-docs-content-section",
  label: "Content Section",
  key: "builder-content-section",
  fields: [
    {
      label: "Section Heading",
      name: "rawJson.heading",
      description: "Content section heading.",
      component: "text",
    },
    {
      label: "Section Body",
      name: "rawJson.body",
      description: "Content section body.",
      component: "text",
    },
    {
      label: "Section Button Text",
      name: "rawJson.buttonText",
      description: "Content section button text.",
      component: "text",
    },
    {
      label: "Section Button Link",
      name: "rawJson.buttonLink",
      description: "Content section link.",
      component: "text",
    },
  ],
}

export default ContentSectionForm
