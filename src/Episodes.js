import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import Context from './FeedContext'
import { RSS_LINK } from './constants'
import Feed from './Feed'
import Parser from 'rss-parser'
import Heading from './Heading'
import Backlink from './Backlink'

const parser = new Parser()

const Episodes = () => {
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
    <>
      <Heading>
        <Backlink />
        Episodes
      </Heading>
      <Feed />
    </>
  )
}
export default Episodes
