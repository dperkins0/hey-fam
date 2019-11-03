import React from 'react'
import { Link } from '@reach/router'
import styled from '@emotion/styled'
import { mq } from './utils'

const StickyContainer = styled.div({
  position: 'sticky',
  top: 0
})

const LinkHider = styled.div`
  ${mq({
  display: ['block', 'block', 'none']
})}
`

const HeaderContainer = styled.header({
  backgroundColor: 'rgb(254, 255, 5)',
  height: '48px',
  fontFamily: 'Roboto Slab, Helvetica, Arial, sans-serif'
})

const Navigation = styled.nav({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: '100%',
  width: '100%'
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
        <Navigation>
          <NavLink to="/">episodes</NavLink>
          <NavLink to="about">about</NavLink>
          <LinkHider>
            <NavLink to="links">links</NavLink>
          </LinkHider>
        </Navigation>
      </HeaderContainer>
    </StickyContainer>
  )
}
export default Header
