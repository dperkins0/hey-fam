import React from 'react'
import { Global } from '@emotion/core'
import { theme } from './constants'

const Styles = () => {
  return (
    <Global
      styles={{
        '#root': {
          backgroundColor: theme.primary.main,
          fontFamily: 'Garamond, "Times New Roman", serif'
        }
      }}
    />
  )
}
export default Styles
