import React from 'react'
import styled from '@emotion/styled'
import Episode from './Episode'
import Loader from './Loader'

const mapFeed = feed => {
  return feed.map(item => (
    <Episode
      key={item.guid}
      title={item.title}
      link={item.link}
      isPatreon={item.isPatreon}
    />
  ))
}

const FeedContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
})

const LoaderContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

function hasItems(feed) {
  return Array.isArray(feed) && feed.length > 0
}

function mapFeeds(acastFeed, patreonFeed) {
  if (!hasItems(acastFeed?.items)) {
    return undefined
  }
  const feed = acastFeed?.items.map(feedItem => {
    return {
      guid: feedItem.guid,
      title: feedItem.title,
      link: feedItem.link,
      publishDate: feedItem.isoDate,
      isPatreon: false
    }
  })
  if (hasItems(patreonFeed?.data)) {
    feed.concat(
      patreonFeed?.data.map(feedItem => {
        return {
          guid: feedItem.id,
          title: feedItem.attributes.title,
          link: feedItem.attributes.url,
          publishDate: feedItem.attributes.published_at,
          isPatreon: true
        }
      })
    )
    feed.sort(function(a, b) {
      return a.publishDate > b.publishDate
        ? -1
        : a.publishDate < b.publishDate
        ? 1
        : 0
    })
  }

  return feed
}

const Feed = ({ acastFeed, patreonFeed }) => {
  const feed = mapFeeds(acastFeed, patreonFeed)
  if (!feed) {
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    )
  }
  return <FeedContainer>{mapFeed(feed)}</FeedContainer>
}
export default Feed
