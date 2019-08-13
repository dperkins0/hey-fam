import React, { useState, useEffect } from 'react'
import Parser from 'rss-parser'
import { RSS_LINK } from '../constants'
import Episode from './Episode'

const parser = new Parser()

const mapFeed = feed => {
  return feed.map(item => <Episode key={item.guid} title={item.title} text={item.contentSnippet} />)
}

const HeyFam = () => {
  const [feed, setFeed] = useState()
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
  return <div>{mapFeed(feed.items)}</div>
}
export default HeyFam
