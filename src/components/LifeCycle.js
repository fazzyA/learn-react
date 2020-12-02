import React, { Component } from 'react'

class LifeCycle extends Component {
    constructor(props){
        super(props)
        this.state = {color:'red'}
        console.log('constructor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getderived')
//        return {color: props.color };
      }
      componentDidMount() {
        console.log('component did mount')

      }
    render() {
        console.log('render')
        return (
            <div>
                <button onClick={()=>this.setState({color:'blue'})}>Change color</button><br />
                {`my color is ${this.state.color}`}
            </div>
        )
    }
}
export default LifeCycle