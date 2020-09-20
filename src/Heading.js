import React from 'react'
import styled from '@emotion/styled'
import { theme } from './constants'

const HeadingElement = styled.h1({
  fontFamily: "'Rubik', sans-serif",
  fontSize: '10vmax',
  color: theme.secondary.dark,
  margin: '0.2rem 0'
})

const Heading = ({ children }) => {
  return <HeadingElement>{children}</HeadingElement>
}
export default Heading
