import React from 'react'
import ReactDOM from 'react-dom'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import HeyFam from './HeyFam'
import { FeedProvider } from './FeedContext'
import Styles from './Styles'

const SW_PATH = '/service-worker.js'
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register(SW_PATH, { scope: '/' })
      .then(registration => {
        console.log('SW registered: ', registration)
        return null
      })
      .catch(error => {
        console.warn('SW registration failed: ', error)
      })
  })
}

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
