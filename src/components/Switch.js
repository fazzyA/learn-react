import React, { Component } from 'react'

export default class Switch extends Component {
    handleOn = (e)=>{
        console.log(e)
        e.target.parentElement.className='on'

    }
    handleOff = (e)=>{
        console.log('off')
        e.target.parentElement.className='off'
    }
    render() {

        return (
            <div className='mm'>
                <button onClick={this.handleOn}>On</button>
                <button onClick={this.handleOff}>Off</button>
            </div>
        )
    }
}
