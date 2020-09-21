import React from 'react'
import Feed from './Feed'
import Heading from './Heading'
import Backlink from './Backlink'
import { useAcastFeed } from './hooks'

const Episodes = () => {
  const acastFeed = useAcastFeed()
  const patreonFeed = []

  return (
    <>
      <Heading>
        <Backlink />
        Episodes
      </Heading>
      <Feed acastFeed={acastFeed} patreonFeed={patreonFeed} />
    </>
  )
}
export default Episodes
