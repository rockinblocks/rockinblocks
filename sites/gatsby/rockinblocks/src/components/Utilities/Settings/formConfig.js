export const formConfig = {
  id: 'rockin-docs-settings',
  label: 'Settings',
  fields: [
    {
      label: 'App Name',
      name: 'rawJson.appName',
      description: 'The name of your application.',
      component: 'text',
    },
    {
      label: 'Google Tag Manager',
      name: 'rawJson.gtmId',
      description: 'Google Tag Manager Property ID',
      component: 'text',
    },
    {
      label: 'Version',
      name: 'rawJson.appVersion',
      description: 'Current App Version',
      component: 'text',
    },
  ]
}

export default formConfig
