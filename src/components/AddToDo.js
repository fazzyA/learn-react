import React, { Component } from 'react'

export default class AddToDo extends Component {
    constructor(props){
        super(props)
        this.state={
            title : '',
            id:''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('i am in submit')
        let newobj =this.state
        console.log(this.state)

         this.props.addtodo(newobj)

    }
     handleChange = (e) => {
        console.log('i am in change');
           this.setState({
               title: e.target.value,
               id: Math.random()*100
           }
           ) 
           
    }
    render() {
console.log(this.props)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' id='title' 
                    onChange={this.handleChange}></input>
                    <button type='submit'>Add to do</button>
                </form>
            </div>
        )
    }
}
