import { useState } from 'react'
import {Telo} from './components/Telo.tsx'
import Menu from './components/Menu.tsx'
import { ekipa } from './models/data.ts'
import { Noga } from './components/Noga.tsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Menu ekipa = {ekipa} />
      <Telo ekipa = {ekipa} />

      <Noga />
    </div>
  )
}

export default App
