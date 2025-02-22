import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)
  useEffect(() => {
    setTimeout(() => {
      const preCount = count + 1
      setCount(preCount)

    }, 1000)


  }, [count])

  return (
    <>
      <div className='text-[56px] text-[pink]'>钟权 { count }</div>
    </>
  )
}

export default App
