import React from 'react'
import styled from '@emotion/styled'

const LoadingBar = styled.progress({
  width: '60%'
})

const Loader = () => {
  return <LoadingBar id="loadingFeed" />
}
export default Loader
