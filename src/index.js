import React from 'react'
import ReactDOM from 'react-dom'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import HeyFam from './components/HeyFam'
import { FeedProvider } from './FeedContext'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from './constants'

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
        <HeyFam />
      </FeedProvider>
    </ThemeProvider>
  )
}

const mountNode = document.getElementById('root')

ReactDOM.render(<App />, mountNode)
