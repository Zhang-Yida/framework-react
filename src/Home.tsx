import React from 'react'

import { Button } from 'antd'
import { Link } from 'react-router-dom'

import Clock from './components/Clock'

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary">Antd Button</Button>
        <Link to="/login">Login Link</Link>
        <Clock></Clock>
      </header>
    </div>
  )
}

export default Home
