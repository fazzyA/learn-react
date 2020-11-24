import React from 'react'
import AddToDo from './AddToDo'
import Header from './Header'
class ToDoList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todos: [
            {title: 'Breakfast', id:1},
            {title: 'Prepare for the class', id:2},
            {title: 'Take a ride', id:3}
        ]
        }
    }
    addtodo = (newtodo) =>{
        console.log('add new to do in state')
        console.log(newtodo)
        // const newTodos = [...this.state.todos]
        // newTodos.push(newtodo)
        // this.setState({
        //     todos: newTodos
        // })
    }
    deletetodo= (id) =>{
        console.log('delete')
    }
render(){

    return (
        <>
        <Header />
        <AddToDo addtodo={this.addtodo} deletetodo={this.deletetodo} />
        <ul>
           {this.state.todos.map(
            item=>(
            <li key={item.id}>{item.title}</li>
            )
        )} 
        </ul>
        
        </>
    )
}
}
export default ToDoList