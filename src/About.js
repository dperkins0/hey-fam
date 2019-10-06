import React from 'react'
import styled from '@emotion/styled'
import logo from './logo.jpg'

const AboutContainer = styled.section({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: '16px'
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
const DescriptionText = styled.h2({})

const Highlighter = styled.mark({
  backgroundColor: 'rgb(254, 255, 5)'
})

const Links = styled.ul({
  width: '320px',
  listStyleType: 'circle'
})

const Link = styled.li({
  margin: '16px 0px'
})

const About = () => {
  return (
    <>
      <AboutContainer>
        <Logo src={logo} alt="hey fam logo" />
        <Description>
          <DescriptionText>
            <Highlighter>
              The only podcast in the universe featuring two white guys talking
              about movies, tv and video games.
            </Highlighter>
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
