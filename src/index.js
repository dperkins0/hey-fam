import React from 'react'
import ReactDOM from 'react-dom'
import HeyFam from './components/HeyFam'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { createClient, TippleProvider } from 'tipple'

const client = createClient({
  fetchOptions: {
    headers: {
      'Content-Type': 'application/rss+xml',
      'Access-Control-Allow-Origin': '*'
    },
  }
})

const App = () => {
  return (
    <TippleProvider client={client}>
      <HeyFam />
    </TippleProvider>
  )
}

const mountNode = document.getElementById('root')
ReactDOM.render(<App />, mountNode)
