import React from 'react'
import Feed from './Feed'
import Heading from './Heading'
import Backlink from './Backlink'
import { useAcastFeed, usePatreonFeed } from './hooks'

const Episodes = () => {
  const acastFeed = useAcastFeed()
  const patreonFeed = usePatreonFeed()

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
