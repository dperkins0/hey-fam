import React, { useContext } from 'react'
import styled from '@emotion/styled'
import Episode from './Episode'
import Context from './FeedContext'
import Loader from './Loader'

const mapFeed = feed => {
  return feed.map(item => (
    <Episode
      key={item.guid}
      title={item.title}
      text={item.contentSnippet}
      linkTo={`episode/${item.guid}`}
      date={item.pubDate}
    />
  ))
}

const FeedContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
})

const LoaderContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const Feed = () => {
  const { feed } = useContext(Context)
  if (feed === undefined) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    )
  }
  return <FeedContainer>{mapFeed(feed.items)}</FeedContainer>
}
export default Feed
