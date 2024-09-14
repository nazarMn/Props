import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Welcome from './components/Welcom/Welcome'
import Main from './components/Main/Main'
function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Header />
    <Main/>
    <Welcome name='John' age='30'/>
    <Welcome name='Piter' age='25'/>

  </div>
  )
}

export default App
