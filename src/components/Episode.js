import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  card: {
    minWidth: '320px',
    margin: '32px'
  }
})

const parseText = text => {
  return String(text).split(/(SUPPORT|SUBSCRIBE)/gm)[0].replace(/(&nbsp;)/g, ' ')
}

const Episode = ({ title, text }) => {
  const classes = useStyles()
  const bodyText = parseText(text)
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{bodyText}</Typography>
      </CardContent>
    </Card>
  )
}
export default Episode
