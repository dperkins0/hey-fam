import React from 'react'
import styled from '@emotion/styled'
import { parseEpisodeText } from './utils'

const EpisodeContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '16px'
})

const Title = styled.h4({
  fontFamily: 'Roboto Slab'
})

const Episode = ({ text, title, guid }) => {
  const bodyText = parseEpisodeText(text)
  return (
    <EpisodeContainer>
      <Title>{title}</Title>
      {bodyText} {guid}
    </EpisodeContainer>
  )
}
export default Episode
