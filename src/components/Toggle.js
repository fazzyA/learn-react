import React, { Component } from 'react'

export default class Toggle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tog: true,
            isUserOnline: true,
            btntext: 'Login'

        }

    }
    toggle = () => {
        
        this.setState({
            tog: !this.state.tog,
            isUserOnline: !this.state.isUserOnline,
            btntext: 'Logout'

        })
    }

    render() {
        console.log(this.state)

        return (<>
            <button onClick={this.toggle}>{this.state.btntext}</button>
          {/* {this.state.tog ? 
                        (<div style={{ backgroundColor: 'white' }}>
                          Hello 
                       </div>)
                       : (<div style={{ backgroundColor: 'black' }}>
                        Hello 
                        
                        </div>)} */}
            {this.state.tog ? 
                        (<div>
                          you r logged in
                       </div>)
                       : (<div>
                        please login
                        
                        </div>)}
       </> )
    }
}
