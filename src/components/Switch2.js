import React, { Component } from 'react'

export default class Switch2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            backgroundColor: 'white',
            str: 'text',
            num: 0,
            tog: true
        }

    }
    handleInc = () => {
        console.log('++')
        let newNum = this.state.num
        this.setState({
            num: ++newNum
        })
    }
    handleDec = () => {
        console.log('--')
        let newNum = this.state.num
        this.setState({
            num: --newNum
        })
    }
    handleOn = () => {
        console.log('on')
        this.setState({
            backgroundColor: 'white'
        })
    }
    handleOff = () => {
        console.log('off')
        this.setState({
            backgroundColor: 'black'
        })


    }

    render() {
        console.log(this.state)

        return (
            
            <div style={{ backgroundColor: this.state.backgroundColor }}>
                <p>{this.state.num}</p>
                <button onClick={this.handleOn}>On</button>
                <button onClick={this.handleOff}>Off</button>
                <button onClick={this.handleInc}>+</button>
                <button onClick={this.handleDec}>-</button>
            </div>
        )
    }
}
