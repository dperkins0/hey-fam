import React from 'react'
import styled from '@emotion/styled'
import { mq } from './utils'

const LinkContainer = styled.ul`
  width: 320px;
  list-style-type: circle;
  display: block;
  ${mq({
    display: ['none', 'block', 'block']
  })}
`

const LinkItem = styled.li({
  margin: '16px 0px'
})

const Links = () => {
  return (
    <LinkContainer>
      <LinkItem>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://patreon.com/heyfam"
        >
          patreon
        </a>
      </LinkItem>
      <LinkItem>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/heyfampodcast"
        >
          facebook
        </a>
      </LinkItem>
      <LinkItem>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.planetbroadcasting.com/our-shows/hey-fam/"
        >
          planet broadcasting
        </a>
      </LinkItem>
    </LinkContainer>
  )
}
export default Links
