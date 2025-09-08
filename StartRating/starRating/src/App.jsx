import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StarRating from './StarRating'

function App() {

  return (
    <>
      <StarRating maxStars={5} color='red' size={48} messages={["Pathetic","Poor","Okay","Good","Excellent"]}/>
      <StarRating maxStars={10} color='yellow' size={30} />

    </>
  )
}

export default App
