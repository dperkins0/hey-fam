import React from 'react'
import { Link } from '@reach/router'
import styled from '@emotion/styled'
import { theme } from './constants'

const HeaderContainer = styled.header({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: theme.secondary.main,
  height: '40px',
  fontFamily: 'Roboto Slab, Helvetica, Arial, sans-serif',
  padding: '0px 24px',
  alignItems: 'center'
})

const HeaderItem = styled(Link)({})

const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <HeaderItem to="/">episodes</HeaderItem>
      </nav>
    </HeaderContainer>
  )
}
export default Header
