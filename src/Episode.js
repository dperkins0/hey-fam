import React from 'react'
import styled from '@emotion/styled'

const EpisodeContainer = styled.div({
  margin: '24px'
})

const Title = styled.a({
  fontFamily: 'Roboto Slab',
  textDecoration: 'underline',
  fontSize: '4vw'
})

const Episode = ({ title, link }) => {
  return (
    <EpisodeContainer>
      <Title target="_blank" rel="noopener noreferrer" href={link}>
        {title}
      </Title>
    </EpisodeContainer>
  )
}
export default Episode
