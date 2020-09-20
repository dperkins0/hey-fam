import React from 'react'
import { Global, css } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'
import HeyFam from './hey-fam-logo.png'

const Styles = () => {
  return (
    <Global
      styles={css`
        ${emotionNormalize}
        body {
          background-color: rgb(140, 213, 220);
          font-family: Garamond, 'Times New Roman', serif;
          overflow-x: hidden;
          background-image: url(${HeyFam});
          background-position: bottom right;
          background-repeat: no-repeat;
        }
      `}
    />
  )
}
export default Styles
