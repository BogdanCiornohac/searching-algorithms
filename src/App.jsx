import React, { useState } from 'react'
import Header from './Components/Header/Header'
import Table from './Components/Algorithms/Table'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="spacer"></div>
      <Header/>
      <Table/>
    </div>
  )
}

export default App
