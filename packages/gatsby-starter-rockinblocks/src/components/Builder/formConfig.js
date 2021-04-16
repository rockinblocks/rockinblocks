import {
  HeroForm as BuilderHero,
  ContentForm as BuilderContent,
} from "@rockinblocks/rockinblocks"

export const formConfig = {
  label: "Page Builder",
  fields: [
    {
      label: "Page Builder",
      name: "rawJson.builder",
      description: "The page builder.",
      component: "blocks",
      templates: {
        "builder-hero": BuilderHero,
        "builder-content": BuilderContent,
      },
    },
  ],
}

export default formConfig
