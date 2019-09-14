import React, { useContext } from 'react'
import styled from '@emotion/styled'
import Episode from './Episode'
import Context from './FeedContext'

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
  flexWrap: 'wrap'
})

const Feed = () => {
  const { feed } = useContext(Context)
  if (feed === undefined) {
    return null
  }
  return <FeedContainer>{mapFeed(feed.items)}</FeedContainer>
}
export default Feed
