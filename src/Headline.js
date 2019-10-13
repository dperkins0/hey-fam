import React from 'react'
import styled from '@emotion/styled'
import logo from './hey-fam.png'
import { Link } from '@reach/router'
import { mq } from './utils'
import Links from './Links'

const AboutContainer = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 16px;
  ${mq({
    justifyContent: ['center', 'center', 'space-between']
  })}
`

const Rule = styled.hr({
  border: '1px solid black'
})

const Logo = styled.img`
  ${mq({
    width: ['240px', '320px', '320px']
  })}
`

const Description = styled.div`
  width: 320px;
  ${mq({
    display: ['none', 'none', 'block']
  })}
})
`

const LinksContainer = styled.div`
  ${mq({
    display: ['none', 'none', 'block']
  })}
`

const DescriptionText = styled.h2({})

const Highlighter = styled.mark({
  backgroundColor: 'rgb(254, 255, 5)'
})

const Headline = () => {
  return (
    <>
      <AboutContainer>
        <Link to="/">
          <Logo src={logo} alt="Hey Fam..! logo" />
        </Link>
        <Description>
          <DescriptionText>
            <Highlighter>
              The only podcast in the universe featuring two white guys talking
              about movies, tv and video games.
            </Highlighter>
          </DescriptionText>
        </Description>
        <LinksContainer>
          <Links />
        </LinksContainer>
      </AboutContainer>
      <Rule />
    </>
  )
}
export default Headline
