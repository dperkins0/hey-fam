import React from 'react'
import styled from '@emotion/styled'

const AboutContainer = styled.div({
  display: 'flex',
  flexDirection: 'column'
})

const LinksContainer = styled.div({
  display: 'flex',
  flexDirection: 'column'
})

const Levins = styled.div({})

const Angus = styled.div({})

const SocialLink = styled.a({
  margin: '16px 0px'
})

const Description = styled.p({})

const Name = styled.h3({
  fontFamily: 'Roboto Slab, Helvetica, Arial, sans-serif'
})

const About = () => {
  return (
    <AboutContainer>
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
        <Description>assassin type</Description>
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
    </AboutContainer>
  )
}
export default About
