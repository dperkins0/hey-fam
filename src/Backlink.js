import React from 'react'
import { Link } from '@reach/router'
import styled from '@emotion/styled'
import { theme } from './constants'

const NavLink = styled(Link)({
  fontFamily: "'Rubik', sans-serif",
  fontSize: '8vw',
  color: theme.secondary.dark,
  marginRight: '16px'
})

const Backlink = () => {
  return <NavLink to="/">{'<'}</NavLink>
}
export default Backlink
