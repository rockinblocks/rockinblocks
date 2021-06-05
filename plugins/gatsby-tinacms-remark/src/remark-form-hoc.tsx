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
import { FormOptions, Form, TinaForm, usePlugin } from 'tinacms'
import { useGlobalRemarkForm, useRemarkForm } from './use-remark-form'
import { ERROR_INVALID_QUERY_NAME } from './errors'

export interface RemarkFormProps extends Partial<FormOptions<any>> {
  queryName?: string // Configure where we are pulling the initial form data from.
}

export function remarkForm(Component: any, options: RemarkFormProps = {}) {
  return function RemarkForm(props: any) {
    const [markdownRemark, form] = useRemarkForm(
      getMarkdownRemark(props.data, options.queryName),
      options
    )

    usePlugin(form || undefined)

    return <Component {...props} data={{ ...props.data, markdownRemark }} />
  }
}

/**
 * @deprecated see `react-tinacms-inline`
 */
export function inlineRemarkForm(
  Component: any,
  options: RemarkFormProps = {}
) {
  return function RemarkForm(props: any) {
    const [markdownRemark, form] = useRemarkForm(
      getMarkdownRemark(props.data, options.queryName),
      options
    )

    usePlugin(form || undefined)

    return (
      <TinaForm form={form as Form}>
        {editingProps => {
          return (
            <Component
              {...props}
              data={{ ...props.data, markdownRemark }}
              {...editingProps}
              form={form}
            />
          )
        }}
      </TinaForm>
    )
  }
}

/**
 * @deprecated See https://github.com/tinacms/rfcs/blob/master/0006-form-hook-conventions.md
 */
export function globalRemarkForm(
  Component: any,
  options: RemarkFormProps = {}
) {
  return function RemarkForm(props: any) {
    const [markdownRemark] = useGlobalRemarkForm(
      getMarkdownRemark(props.data, options.queryName),
      options
    )

    return <Component {...props} data={{ ...props.data, markdownRemark }} />
  }
}

const getMarkdownRemark = (data: any, queryName: string = 'markdownRemark') => {
  const markdownRemark = data[queryName]
  if (!markdownRemark) {
    throw ERROR_INVALID_QUERY_NAME(queryName)
  }
  return markdownRemark
}
