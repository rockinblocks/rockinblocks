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
      label: 'App Version',
      name: 'rawJson.appVersion',
      description: 'The application verison.',
      component: 'text',
    },
    {
      label: 'Google Tag Manager ID',
      name: 'rawJson.gtmId',
      description: 'Google Tag Manager Property ID',
      component: 'text',
    },
  ]
}

export default formConfig
