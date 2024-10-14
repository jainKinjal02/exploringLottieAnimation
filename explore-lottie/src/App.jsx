import Lottie from 'lottie-react';
import animationData from './assets/Animation - 1728033863037.json'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div><strong>
      Exploring Lottie with React
      </strong>
     
      </div>
      <br/>
      <div>
        <Lottie animationData={animationData} />
      </div>
    </>
  )
}

export default App