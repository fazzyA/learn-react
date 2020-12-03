import React, { Component } from 'react'
import Name from './components/Name'

export default class Main1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : 'faiza',
            greetMsg: 'Hello good morning'
        }
    }
    render() {
        return (
            <div>
                <Name name={this.state.name} greetMsg={this.state.greetMsg} />
            </div>
        )
    }
}
