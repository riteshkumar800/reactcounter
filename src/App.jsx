import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [count, setcount1] = useState(0)
  // const [couunt2, setcouunt2] = useState(second)

  const incremment=()=>{
    setcount1(count+1)
  }
  const decremment=()=>{
    setcount1(count-1)
  }

  return (
    <>
      <div className="bg-gray-600 w-screen h-screen text-black p-4">
        <h1 className="text-xl font-bold m-4 bg-amber-200 w-10 p-4 border-4 rounded">{count}</h1>
        <button onClick={incremment} className='bg-amber-200 p-4 m-4'>Increement</button>
        <button onClick={decremment} className='bg-amber-700 p-4 m-4'> decreement</button>
      </div>
    </>
  )
}

export default App
