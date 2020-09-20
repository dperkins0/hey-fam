import React from 'react'
import Backlink from './Backlink'
import Heading from './Heading'
import BodyText from './BodyText'

const Patreon = () => {
  return (
    <>
      <Heading>
        <Backlink />
        Patreon
      </Heading>
      <BodyText>
        for $5 a month you can get an extra perfect episode every week. Details
        at{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://patreon.com/heyfam"
        >
          patreon.com/heyfam
        </a>
      </BodyText>
    </>
  )
}
export default Patreon
