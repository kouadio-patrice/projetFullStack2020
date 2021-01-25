//import App from './App'
const Part = (props) => {
  const {name,exercice} = props
  console.log('partie part' ,props)
    return(
      <div>
          <p>{name.name} {exercice.exercises} </p>
      </div>
      
    )
  }
  export default Part;