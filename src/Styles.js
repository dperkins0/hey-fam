import React from 'react'
import { Global, css } from '@emotion/core'
import { theme } from './constants'
import emotionNormalize from 'emotion-normalize'

const Styles = () => {
  return (
    <Global
      styles={css`
        ${emotionNormalize}
        body {
          background-color: ${theme.primary.main};
          font-family: Garamond, "Times New Roman", serif;
          overflow-x: hidden;
        }
      `}
    />
  )
}
export default Styles
