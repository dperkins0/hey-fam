import React, { useContext, useEffect } from 'react'
import { Router } from '@reach/router'
import styled from '@emotion/styled'
import Parser from 'rss-parser'
import Context from './FeedContext'
import { RSS_LINK } from './constants'
import Header from './Header'
import Feed from './Feed'
import SingleEpisode from './SingleEpisode'
import Patreon from './Patreon'
import About from './About'
import Links from './Links'

const Container = styled.div({
  width: '100%',
  minHeight: '100vh',
  margin: '0px auto'
})

const ContentContainer = styled.section({
  padding: '16px 40px'
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
      <About />
      <ContentContainer>
        <Router primary={false}>
          <Feed path="/" />
          <SingleEpisode path="episode/:episodeGuid" />
          <Patreon path="patreon" />
          <Links path="links" />
        </Router>
      </ContentContainer>
    </Container>
  )
}
export default HeyFam
