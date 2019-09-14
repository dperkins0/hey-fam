import React from 'react'
import ReactDOM from 'react-dom'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import HeyFam from './HeyFam'
import { FeedProvider } from './FeedContext'
import Styles from './Styles'

const App = () => {
  return (
    <FeedProvider>
      <Styles />
      <HeyFam />
    </FeedProvider>
  )
}

const mountNode = document.getElementById('root')

ReactDOM.render(<App />, mountNode)
