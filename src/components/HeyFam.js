import React, { useContext, useEffect } from 'react'
import Parser from 'rss-parser'
import Container from '@material-ui/core/Container'
import Context from '../FeedContext'
import Episode from './Episode'
import { Placeholders } from './PlaceholderEpisode'
import { RSS_LINK, theme } from '../constants'

const parser = new Parser()

const mapFeed = feed => {
  return feed.map(item => (
    <Episode
      key={item.guid}
      title={item.title}
      text={item.contentSnippet}
      date={item.pubDate}
    />
  ))
}

const HeyFam = () => {
  const { feed, setFeed } = useContext(Context)
  useEffect(() => {
    async function parseFeed() {
      const feed = await parser.parseURL(RSS_LINK)
      setFeed(feed)
    }
    parseFeed()
  }, [])
  console.log(feed)
  return (
    <Container maxWidth="md">
      {feed === undefined ? <Placeholders /> : mapFeed(feed.items)}
    </Container>
  )
}
export default HeyFam
