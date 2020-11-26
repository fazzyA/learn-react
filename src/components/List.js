import React, { Component } from 'react'
import AddList from './AddList';

export default class List extends Component {
    constructor(props){
        super(props)
        this.state = {
           todos: [
            {title: 'breakfast',id:1},
            {title: 'prepare',id:2},
            {title: 'take a ride',id:3},
        ]
    }
}
addtodos =(todo) => {
    console.log(todo);
    let newTodos = [...this.state.todos]
    newTodos.push(todo);
    this.setState({
       todos :newTodos
    })

}
deletetodo =(id) =>{
    console.log(id)
    let newobj = [...this.state.todos]
    let newTodos = newobj.filter(item => item.id!=id)

    this.setState({
       todos :newTodos
    })
}
    render() {
        return (
            <div>
                <AddList  addtodos = {this.addtodos}/>
                <ul>
                    {this.state.todos.map(
                        item => (
                            <li key={item.id}>{item.title}
                            <button key={item.id} onClick={()=>this.deletetodo(item.id)}>X</button>
                            </li>
                            
                        )
                    )}
                </ul>
            </div>
        )
    }
}
