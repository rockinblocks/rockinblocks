/**

Copyright 2021 Forestry.io Holdings, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

import { FormOptions, Form } from 'tinacms'
import { MdxNode } from './mdx-node'
import { useLocalMdxForm } from './useMdxForm'

interface MdxFormProps extends Partial<FormOptions<any>> {
  mdx: MdxNode
  render(renderProps: { form: Form; mdx: any }): JSX.Element
  timeout?: number
}

export function MdxForm({ mdx: _mdx, render, ...options }: MdxFormProps) {
  const [mdx, form] = useLocalMdxForm(_mdx, options)

  return render({ form: form as Form, mdx })
}
