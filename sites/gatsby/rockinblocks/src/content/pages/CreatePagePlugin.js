import { JsonCreatorPlugin } from 'gatsby-tinacms-json'

const CreatePagePlugin = new JsonCreatorPlugin({
  label: 'New JSON File',
  filename: form => {
    return form.filename
  },
  fields: [
    {
      name: 'filename',
      component: 'text',
      label: 'Filename',
      placeholder: 'content/data/puppies.json',
      description:
        'The full path to the new JSON file, relative to the repository root.',
    },
  ],
})

export default CreatePagePlugin