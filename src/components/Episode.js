import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  card: {
    margin: '32px',
    minHeight: '240px'
  }
})

const parseText = text => {
  return String(text)
    .split(/(SUPPORT|SUBSCRIBE)/gm)[0]
    .replace(/(&nbsp;)/g, ' ')
}

const Episode = ({ title, text, date }) => {
  const classes = useStyles()
  const bodyText = parseText(text)
  const parsedDate = new Date(date).toLocaleDateString()
  return (
    <Card className={classes.card}>
      <CardHeader title={title} subheader={parsedDate} />
      <CardContent>
        <Typography variant="body2">{bodyText}</Typography>
      </CardContent>
    </Card>
  )
}
export default Episode
