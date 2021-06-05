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

import * as React from 'react'
import { FormOptions, Form, TinaForm } from 'tinacms'
import { useLocalMdxForm, useGlobalMdxForm } from './useMdxForm'
import { ERROR_INVALID_QUERY_NAME } from './errors'

interface MdxFormProps extends Partial<FormOptions<any>> {
  queryName?: string // Configure where we are pulling the initial form data from.
}

export function mdxForm(Component: any, options: MdxFormProps = {}) {
  return function Mdx(props: any) {
    const [mdx] = useLocalMdxForm(
      getMdx(props.data, options.queryName),
      options
    )

    return <Component {...props} data={{ ...props.data, mdx }} />
  }
}

export function inlineMdx(Component: any, options: MdxFormProps = {}) {
  return function Mdx(props: any) {
    const [mdx, form] = useLocalMdxForm(
      getMdx(props.data, options.queryName),
      options
    )

    return (
      <TinaForm form={form as Form}>
        {editingProps => {
          return (
            <Component
              {...props}
              data={{ ...props.data, mdx }}
              {...editingProps}
              form={form}
            />
          )
        }}
      </TinaForm>
    )
  }
}

export function GlobalMdxForm(Component: any, options: MdxFormProps = {}) {
  return function Mdx(props: any) {
    const [mdx] = useGlobalMdxForm(
      getMdx(props.data, options.queryName),
      options
    )

    return <Component {...props} data={{ ...props.data, mdx }} />
  }
}

const getMdx = (data: any, queryName: string = 'mdx') => {
  const mdx = data[queryName]
  if (!mdx) {
    throw ERROR_INVALID_QUERY_NAME(queryName)
  }
  return mdx
}
