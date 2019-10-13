import React from 'react'
import styled from '@emotion/styled'

const AboutContainer = styled.div({
  display: 'flex',
  flexDirection: 'column'
})

const Levins = styled.div({})

const Angus = styled.div({})

const SocialLink = styled.a({})

const Name = styled.h3({})

const About = () => {
  return (
    <AboutContainer>
      <Levins>
        <Name>Andrew Levins</Name>
        <p>
          DAD / DJ / WRITER / PODCAST GUY ~~~~~~~~ Host of Hey Fam, All The
          Small Games and Serious Issues.
        </p>
        <SocialLink
          href="https://twitter.com/levdawg"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </SocialLink>
      </Levins>
      <Angus>
        <Name>Angus Truskett</Name>
        <p>assassin type</p>
        <SocialLink
          href="https://twitter.com/chimichangus"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </SocialLink>
      </Angus>
    </AboutContainer>
  )
}
export default About
