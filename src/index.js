import React from 'react'
import ReactDOM from 'react-dom'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import HeyFam from './HeyFam'
import { FeedProvider } from './FeedContext'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from './constants'
import Styles from './Styles'

const heyTheme = createMuiTheme({
  palette: {
    primary: theme.primary,
    secondary: theme.secondary
  }
})

const App = () => {
  return (
    <ThemeProvider theme={heyTheme}>
      <FeedProvider>
        <Styles />
        <HeyFam />
      </FeedProvider>
    </ThemeProvider>
  )
}

const mountNode = document.getElementById('root')

ReactDOM.render(<App />, mountNode)
