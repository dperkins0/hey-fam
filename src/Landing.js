import React from 'react'
import styled from '@emotion/styled'
import { Link } from '@reach/router'
import { theme } from './constants'

const LinkContainer = styled.nav({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  fontFamily: "'Rubik', sans-serif"
})

const NavLink = styled(Link)({
  fontSize: '16vw',
  ':hover': {
    color: theme.secondary.dark
  }
})

const Landing = () => {
  return (
    <LinkContainer>
      <NavLink to="/episodes">Episodes</NavLink>
      <NavLink to="/patreon">Patreon</NavLink>
      <NavLink to="/links">Links</NavLink>
      <NavLink to="/about">About</NavLink>
    </LinkContainer>
  )
}
export default Landing
