/** @jsx jsx  */

import { Node } from '@robinedman/slate'
import { jsx } from '@robinedman/slate-hyperscript'

export const input = <text>one</text>

export const test = value => {
  return Node.string(value)
}

export const output = `one`
