import { useEffect, useState } from 'react'
import axios from 'axios'
import {
  RSS_LINK,
  PATREON_LINK,
  PATREON_REQUEST_PARAM_STRING
} from './constants'
import Parser from 'rss-parser'

export function useAcastFeed() {
  const [feed, setFeed] = useState()
  useEffect(() => {
    const parser = new Parser()
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

    function parseRSS(feed) {
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
      return parseRSS(feed).then(parsedFeed => {
        setFeed(parsedFeed)
      })
    })
  }, [])
  return feed
}

export function usePatreonFeed() {
  const [feed, setFeed] = useState()
  useEffect(() => {
    const requestHeaders = new Headers({
      Accept: 'application/json'
    })
    function fetchFeed() {
      return axios
        .get(PATREON_LINK, {
          method: 'get',
          headers: requestHeaders,
          params: new URLSearchParams(PATREON_REQUEST_PARAM_STRING)
        })
        .then(response => {
          return response.data
        })
        .catch(error => {
          console.log('could not fetch patreon posts', error)
          return []
        })
    }
    fetchFeed()
      .then(feed => {
        setFeed(feed)
      })
      .catch(error => {
        console.log('did not set patreon feed', error)
      })
  }, [])
  return feed
}
