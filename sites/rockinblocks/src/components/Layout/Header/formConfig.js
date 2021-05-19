export const formConfig = {
  id: 'rockin-docs-header',
  label: 'Header',
  fields: [
    {
      label: 'App Name',
      name: 'rawJson.appName',
      description: 'Name of the app',
      component: 'text',
    },
  ],
  onSubmit: async () => {
    window.alert('Saved!')
  },
}

export default formConfig
