import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import styled from '@emotion/styled'

const SkeletonContainer = styled.div({
  margin: '32px',
  height: '240px'
})

const PlaceholderEpisode = () => {
  return (
    <SkeletonContainer>
      <Skeleton width={'100%'} height={'100%'} variant="text" />
    </SkeletonContainer>
  )
}

export const Placeholders = () => {
  return [
    <PlaceholderEpisode key={1} />,
    <PlaceholderEpisode key={2} />,
    <PlaceholderEpisode key={3} />,
    <PlaceholderEpisode key={4} />,
    <PlaceholderEpisode key={5} />,
    <PlaceholderEpisode key={6} />,
    <PlaceholderEpisode key={7} />,
    <PlaceholderEpisode key={8} />
  ]
}
export default PlaceholderEpisode
