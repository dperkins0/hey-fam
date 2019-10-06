import React from 'react'
import { Link } from '@reach/router'
import styled from '@emotion/styled'

const StickyContainer = styled.div({
  position: 'sticky',
  top: 0
})

const HeaderContainer = styled.header({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: 'rgb(254, 255, 5)',
  height: '48px',
  fontFamily: 'Roboto Slab, Helvetica, Arial, sans-serif',
  alignItems: 'center'
})

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: 'black',
          textDecoration: isCurrent ? 'underline overline' : null,
          padding: '0px 32px'
        }
      }
    }}
  />
)

const Header = () => {
  return (
    <StickyContainer>
      <HeaderContainer>
        <nav>
          <NavLink to="/">episodes</NavLink>
          <NavLink to="links">links</NavLink>
        </nav>
      </HeaderContainer>
    </StickyContainer>
  )
}
export default Header
