import { useState } from 'react'
import './App.css'
import Login from './components/Authentication/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-4 h-screen flex items-center justify-center bg-zinc-900 ">
      <Login/>
    </div>
  )
}

export default App
