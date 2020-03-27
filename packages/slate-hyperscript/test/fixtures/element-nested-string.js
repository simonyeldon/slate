/** @jsx jsx */

import { jsx } from '@robinedman/slate-hyperscript'

export const input = (
  <element>
    <element>word</element>
  </element>
)

export const output = {
  children: [
    {
      children: [
        {
          text: 'word',
        },
      ],
    },
  ],
}
