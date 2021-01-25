
import Content from './Content'
import Header from './Header'
import Total from './Total'
const Course = (props) =>{
    const {course} = props
    console.log('compo cours',course)
    const nombreExo = course.parts.map(exo => exo.exercises)
    let total = 0
    nombreExo.forEach(value => {
       total += value 
    });
    console.log('total exo',total)

    return(
        <div>
            <h1>Web developpement curriculum</h1>
          <Header course ={course.name}   />
          <Content partie ={course.parts} />
          <ul>
          {course.parts.map((course) => 
            <p key={course.id} > {course.name}   {course.exercises} </p>
          )}
        </ul>
          <Total total ={total} />
        </div>
    )
  }
  export default Course