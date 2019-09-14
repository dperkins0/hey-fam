export const parseEpisodeText = text => {
  return String(text)
    .split(/(SUPPORT|SUBSCRIBE)/gm)[0]
    .replace(/(&nbsp;)/g, ' ')
}
