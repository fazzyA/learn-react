import React from 'react';
class SideBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            num: 1,
            num2: 2,
            students: [{name: 'hh',age:19},{name: 'kk',age:20},{name: 'mm',age:21}]
        }
    }
    render() {

        console.log(this.props.color);
        let color = this.props.color

        return (
            <>
            {
                this.state.students.map(item => <h2>{item.name}</h2>)
            }
            {/* <h2>This is my {this.props.name} {this.state.num2}</h2>
        <h3 style={{backgroundColor: color}}>Greetings from {this.props.color}</h3> */}
            </>
        )
    }
}
export default SideBar