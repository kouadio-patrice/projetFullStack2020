import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  const {onClick,text} = props
  return (
       <button onClick={onClick}>
           {text}
       </button>
  
     
  )
}


const App = (props) => {
  const {anecdotes}= props 
  const [selected, setSelected] = useState(1)
  const [counter ,setCompter] = useState([0,0,0,0,0,0])
  
  const haleartoir = (max,min) =>{
    min = 0
    max = anecdotes.length-1
    console.log('max',max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  

  console.log('selected',selected)
  let points = [0, 0,0,0,0,0]
  const copy = [...points]
  copy[selected] += 1
  points = points.fill(copy[selected],selected,selected)
  console.log('points',points)
  
  const handlerVote = () => {
    setCompter(copy[selected]++ )
   
  }
  const handlerClic = () => {
    setCompter(copy[selected])
     setSelected(haleartoir  )
  }
  console.log('copy',copy)
console.log('pcon',counter)
  return (
    <div>
      <p>
      {anecdotes[selected]}
      </p>
       <p> has {counter} vote </p>
    
      <Button onClick = {handlerVote} text='vote'/>
       <Button onClick= {handlerClic} text='next anecdote'/>
       
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)