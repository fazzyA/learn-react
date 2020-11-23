import React from 'react'
class Show extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            student: [{name: 'hh',age:19},{name: 'kk',age:20},{name: 'mm',age:21}]
        }

    }
  render(){
      let newStud = this.state.student.filter(item => item.age>19)
        return(
            <>
            <h2>hi</h2>
            {newStud.map(item=>( 
            <h2>{item.name} {item.age} </h2>
                    ))
                }
            { this.state.student.filter(item=>item.age>19).map(item=>(
                <>
                <h2>{item.name}  {item.age}</h2>
                </>
            ))}
            </>

        )
    }
}
export default Show