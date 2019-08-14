import React from 'react'
import ReactDOM from 'react-dom'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import HeyFam from './components/HeyFam'
import { FeedProvider } from './FeedContext'

const App = () => {
  return (
    <FeedProvider>
      <HeyFam />
    </FeedProvider>
  )
}

const mountNode = document.getElementById('root')
ReactDOM.render(<App />, mountNode)
