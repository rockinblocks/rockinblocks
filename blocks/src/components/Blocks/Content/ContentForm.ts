import { ContentSection } from "./ContentSection"

export const ContentForm = {
  id: "rockin-docs-content-builder",
  label: "Content Builder",
  key: "builder-content",
  fields: [
    {
      label: "Content Builder",
      name: "rawJson.contentBuilder",
      description: "The content builder.",
      component: "blocks",
      templates: {
        "builder-content": ContentSection,
      },
    },
  ],
}

export default ContentForm
