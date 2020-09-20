import React from 'react'
import { Router } from '@reach/router'
import styled from '@emotion/styled'
import Landing from './Landing'
import Patreon from './Patreon'
import Episodes from './Episodes'
import About from './About'
import Links from './Links'

const Container = styled.section({
  width: '100%',
  minHeight: '100vh',
  margin: '0px auto',
  padding: '16px 24px'
})

const HeyFam = () => {
  return (
    <Container>
      <Router primary={false}>
        <Landing path="/" />
        <Episodes path="episodes" />
        <About path="about" />
        <Patreon path="patreon" />
        <Links path="links" />
      </Router>
    </Container>
  )
}
export default HeyFam
