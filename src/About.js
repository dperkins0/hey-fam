import React from 'react'
import styled from '@emotion/styled'
import Heading from './Heading'
import Backlink from './Backlink'
import BodyText from './BodyText'

const AboutContainer = styled.div({})

const LinksContainer = styled.div({
  display: 'flex',
  flexDirection: 'column'
})

const HostsContainer = styled.section({
  display: 'flex',
  flexDirection: 'column'
})

const Levins = styled.article({
  width: '60%'
})

const Angus = styled.article({
  width: '60%'
})

const SocialLink = styled.a({
  margin: '16px 0px'
})

const Description = styled.p({})

const Name = styled.h3({})

const About = () => {
  return (
    <AboutContainer>
      <Heading>
        <Backlink />
        About
      </Heading>
      <BodyText>
        <HostsContainer>
          <Levins>
            <Name>Andrew Levins</Name>
            <Description>
              DAD / DJ / WRITER / PODCAST GUY ~~~~~~~~ Host of Hey Fam, All The
              Small Games and Serious Issues.
            </Description>
            <LinksContainer>
              <SocialLink
                href="https://twitter.com/levdawg"
                target="_blank"
                rel="noopener noreferrer"
              >
                twitter
              </SocialLink>
              <SocialLink
                href="https://instagram.com/levdawg"
                target="_blank"
                rel="noopener noreferrer"
              >
                instagram
              </SocialLink>
              <SocialLink
                href="http://yolevins.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                yo levins
              </SocialLink>
            </LinksContainer>
          </Levins>
          <Angus>
            <Name>Angus Truskett</Name>
            <Description>assassin type & former abductee</Description>
            <LinksContainer>
              <SocialLink
                href="https://twitter.com/chimichangus"
                target="_blank"
                rel="noopener noreferrer"
              >
                twitter
              </SocialLink>
              <SocialLink
                href="https://instagram.com/chimichangus"
                target="_blank"
                rel="noopener noreferrer"
              >
                instagram
              </SocialLink>
            </LinksContainer>
          </Angus>
        </HostsContainer>
      </BodyText>
    </AboutContainer>
  )
}
export default About
