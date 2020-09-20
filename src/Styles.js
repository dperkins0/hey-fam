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
          font-family: 'Roboto Slab', Helvetica, Arial, sans-serif,
          overflow-x: hidden;
          background-image: url(${HeyFam});
          background-position: bottom right;
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: 30%;
        }
      `}
    />
  )
}
export default Styles
