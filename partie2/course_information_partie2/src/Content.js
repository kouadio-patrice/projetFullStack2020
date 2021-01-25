import Part from './Part'
const Content = (props) =>{
  const {partie} = props
  console.log('partie contenent', partie)
    
    return(
      <div>
        {partie.map(value =>
           <Part  key ={value.id} name ={value.name} exercice ={value.exercises} />
          )}
      </div>
    )
   }

   export default Content ;