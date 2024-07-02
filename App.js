import Keypad from "./keypad"
import './App.css'
import { useState } from "react"

function App(){
  let [input,setinput] = useState("")
  function handleClick(value){
    setinput(input+value)
  }
  function calculate(value){
    let outputval = eval(input)
    setinput(outputval)
  }
  function handleclear(value){
    setinput("")
  }
  
  return(
  <div className='container'><h1> Calculator App using React</h1>
  <div className='calculator'>
  <input type='text' value={input} className='output'/>
     <Keypad handleClick={handleClick} handleclear={handleclear} calculate={calculate}/>
     </div>

     </div>
  )
}

export default App