import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  text: {
    color: 'black'
  }
})

const Bar = () => {
  const classes = useStyles()
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography className={classes.text}>Hey Fam..!</Typography>
      </Toolbar>
    </AppBar>
  )
}
export default Bar
