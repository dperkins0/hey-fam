import React from 'react'
import styled from '@emotion/styled'
import Heading from './Heading'
import Backlink from './Backlink'
import BodyText from './BodyText'

const LinkContainer = styled.ul`
  width: 320px;
  list-style-type: circle;
`

const LinkItem = styled.li({
  margin: '16px 0px'
})

const Links = () => {
  return (
    <>
      <Heading>
        <Backlink />
        Links
      </Heading>
      <BodyText>
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
              href="https://www.sanspantsradio.com/podcasts/hey-fam/"
            >
              sanspants radio
            </a>
          </LinkItem>
        </LinkContainer>
      </BodyText>
    </>
  )
}
export default Links
