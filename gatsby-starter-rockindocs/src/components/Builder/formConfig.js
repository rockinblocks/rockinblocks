import { HeroForm as BuilderHero } from 'gatsby-plugin-rockindocs-blocks'

export const formConfig = {
  label: 'Page Builder',
  fields: [
    {
      label: 'Page Builder',
      name: 'rawJson.builder',
      description: 'The page builder.',
      component: 'blocks',
      templates: {
        'builder-hero': BuilderHero,
      },
    },
  ]
}

export default formConfig
