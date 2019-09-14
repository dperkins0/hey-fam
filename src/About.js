import React from 'react'
import styled from '@emotion/styled'

const AboutContainer = styled.section({
  display: 'flex'
})

const Rule = styled.hr({
    border: '1px solid black'
})

const About = () => {
  return (
    <>
      <AboutContainer>
        <a target="_blank" rel="noreferrer" href="https://patreon.com/heyfam">
          patreon
        </a>
      </AboutContainer>
      <Rule />
    </>
  )
}
export default About
