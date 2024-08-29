import React, { useState } from 'react'

const Hooks = () => {
    let[counter,setCounter]=useState(1)
    let[fact,setFact]=useState(23)
  return (
    <div>
        <h2>Hooks Concept</h2><hr />
        <button>Counter value : {counter}</button>
        <button>Factorial value is : {fact}</button>
    </div>
  )
}

export default Hooks