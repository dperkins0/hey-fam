import React from 'react'
import styled from '@emotion/styled'
import logo from './logo.jpg'

const AboutContainer = styled.section({
  display: 'flex',
  justifyContent: 'space-between'
})

const Rule = styled.hr({
  border: '1px solid black'
})

const Logo = styled.img({
  width: '320px'
})

const Description = styled.div({
  width: '320px'
})
const DescriptionText = styled.h3({})

const Links = styled.ul({
  width: '320px'
})
const Link = styled.li({})

const About = () => {
  return (
    <>
      <AboutContainer>
        <Logo src={logo} />
        <Description>
          <DescriptionText>
            The only podcast in the universe featuring two white guys talking
            about movies, tv and video games.
          </DescriptionText>
        </Description>
        <Links>
          <Link>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://patreon.com/heyfam"
            >
              patreon
            </a>
          </Link>
          <Link>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/heyfampodcast"
            >
              facebook
            </a>
          </Link>
          <Link>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.planetbroadcasting.com/our-shows/hey-fam/"
            >
              planet broadcasting
            </a>
          </Link>
        </Links>
      </AboutContainer>
      <Rule />
    </>
  )
}
export default About
