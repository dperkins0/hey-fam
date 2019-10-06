import facepaint from 'facepaint'

export const parseEpisodeText = text => {
  return String(text)
    .split(/(SUPPORT|SUBSCRIBE)/gm)[0]
    .replace(/(&nbsp;)/g, ' ')
}

export const mq = facepaint([
  '@media(min-width: 420px)',
  '@media(min-width: 670px)',
  '@media(min-width: 1120px)'
])
