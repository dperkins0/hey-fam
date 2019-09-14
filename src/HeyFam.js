import React, { useContext, useEffect } from 'react'
import { Router } from '@reach/router'
import styled from '@emotion/styled'
import Parser from 'rss-parser'
import Context from './FeedContext'
import { RSS_LINK } from './constants'
import Header from './Header'
import Feed from './Feed'
import SingleEpisode from './SingleEpisode'

const Container = styled.div({
  width: '100%',
  minHeight: '100vh',
  margin: '0px auto'
})

const parser = new Parser()

const HeyFam = () => {
  const { setFeed } = useContext(Context)
  useEffect(() => {
    async function parseFeed() {
      const feed = await parser.parseURL(RSS_LINK)
      setFeed(feed)
    }
    parseFeed()
  }, [])
  return (
    <Container>
      <Header />
      <Router>
        <Feed path="/" />
        <SingleEpisode path="episode/:episodeGuid" />
      </Router>
    </Container>
  )
}
export default HeyFam
