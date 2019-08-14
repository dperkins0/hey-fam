import React, { useContext, useEffect } from 'react'
import Parser from 'rss-parser'
import Container from '@material-ui/core/Container'
import Context from '../FeedContext'
import Episode from './Episode'
import Bar from './Bar'
import { RSS_LINK } from '../constants'

const parser = new Parser()

const mapFeed = feed => {
  return feed.map(item => (
    <Episode key={item.guid} title={item.title} text={item.contentSnippet} />
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
  if (feed === undefined) {
    return <div>fetching</div>
  }
  console.log(feed)
  return (
    <>
      <Bar />
      <Container>{mapFeed(feed.items)}</Container>
    </>
  )
}
export default HeyFam
