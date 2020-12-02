import React, { Component } from 'react'

class Life2 extends Component {
    constructor(props) {
        super(props)
        console.log('constructor')
        this.state = {
            color:'red'
        }
    }
    componentDidMount() {
        console.log('component did mount')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getderived')
        //        return {color: props.color };
    }
    // shouldComponentUpdate() {
    //     return true
    // }
    componentWillUnmount(){
        //clearance
        console.log('unmount')
    }

    render() {
        console.log('render')
        return (
            <div>
                <button onClick={() => this.setState({ color: 'blue' })}>Change color</button><br />

                My color is {this.state.color}
                {this.props}
            </div>
        )
    }
}
export default Life2