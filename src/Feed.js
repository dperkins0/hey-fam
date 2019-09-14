import React, { useContext } from 'react'
import styled from '@emotion/styled'
import Episode from './Episode'
import Context from './FeedContext'

const mapFeed = feed => {
  return feed.map(item => (
    <Episode
      key={item.guid}
      guid={item.guid}
      title={item.title}
      text={item.contentSnippet}
      date={item.pubDate}
    />
  ))
}

const FeedContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '24px 32px'
})

const Feed = () => {
  const { feed } = useContext(Context)
  if (feed === undefined) {
    return null
  }
  return <FeedContainer>{mapFeed(feed.items)}</FeedContainer>
}
export default Feed
