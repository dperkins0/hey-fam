import React, { useContext } from 'react'
import Episode from './Episode'
import Context from './FeedContext'
import { parseEpisodeText } from './utils'

const getEpisodeFromGuid = (guid, feed) => {
  return feed.find(episode => episode.guid === guid)
}

const SingleEpisode = ({ episodeGuid }) => {
  const { feed } = useContext(Context)
  if (feed === undefined) {
    return null
  }
  const episode = getEpisodeFromGuid(episodeGuid, feed.items)
  if (episode === undefined || episode === null) {
    return <div>no ep</div>
  }
  const bodyText = parseEpisodeText(episode.contentSnippet)
  return <Episode text={bodyText} title={episode.title} />
}
export default SingleEpisode
