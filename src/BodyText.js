import React from 'react'
import styled from '@emotion/styled'

const TextContainer = styled.section({
  fontFamily: "'Roboto Slab', Helvetica, Arial, sans-serif",
  fontSize: '4vw'
})

const BodyText = ({ children }) => {
  return <TextContainer>{children}</TextContainer>
}
export default BodyText
