import React from 'react'
import { Global, css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'

const Styles = () => {
  return (
    <Global
      styles={css`
        ${emotionNormalize}
        body {
          background-color: rgb(140, 213, 220);
          font-family: Garamond, 'Times New Roman', serif;
          overflow-x: hidden;
        }
      `}
    />
  )
}
export default Styles
