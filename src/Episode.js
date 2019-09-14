import React from 'react'
import { Link } from '@reach/router'
import styled from '@emotion/styled'
import { parseEpisodeText } from './utils'

const EpisodeContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '320px',
  margin: '24px'
})

const Title = styled.h4({
  fontFamily: 'Roboto Slab'
})

const EpisodeImage = styled.img({
  width: '320px'
})

const Episode = ({ text, title, linkTo }) => {
  const bodyText = parseEpisodeText(text)
  return (
    <EpisodeContainer>
      <Title>{title}</Title>
      {bodyText}
      {linkTo && <Link to={linkTo}>link</Link>}
    </EpisodeContainer>
  )
}
export default Episode
