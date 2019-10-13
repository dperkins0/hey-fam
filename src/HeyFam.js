import React, { useContext, useEffect } from 'react'
import { Router } from '@reach/router'
import styled from '@emotion/styled'
import axios from 'axios'
import Parser from 'rss-parser'
import Context from './FeedContext'
import { RSS_LINK } from './constants'
import Header from './Header'
import Feed from './Feed'
import SingleEpisode from './SingleEpisode'
import Patreon from './Patreon'
import Headline from './Headline'
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
    const requestHeaders = new Headers({
      Accept: 'application/rss+xml'
    })

    function fetchFeed() {
      return axios
        .get(RSS_LINK, {
          method: 'get',
          headers: requestHeaders
        })
        .then(response => {
          return response.data
        })
        .catch(error => {
          console.log('could not fetch feed: ', error)
        })
    }

    function parseFeed(feed) {
      return parser
        .parseString(feed)
        .then(parsedFeed => {
          return parsedFeed
        })
        .catch(error => {
          console.log('could not parse feed: ', error)
        })
    }

    fetchFeed().then(feed => {
      return parseFeed(feed).then(parsedFeed => {
        setFeed(parsedFeed)
      })
    })
  }, [])

  return (
    <Container>
      <Header />
      <Headline />
      <ContentContainer>
        <Router primary={false}>
          <Feed path="/" />
          <SingleEpisode path="episode/:episodeGuid" />
          <About path="about" />
          <Patreon path="patreon" />
          <Links path="links" />
        </Router>
      </ContentContainer>
    </Container>
  )
}
export default HeyFam
