import React from 'react'

export default class AddList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title:'', id: ''}

    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('iam in submit')
        let newobj = this.state;
        const {addtodos} =this.props
        addtodos(newobj);
        // this.props.addtodos(newobj);

    }
    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            title: e.target.value,
            id: Math.round(Math.random()*100+.2)
        })
        //console.log(this.state)

    }
    render() {
        console.log(this.props)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' id='title' onChange={this.handleChange}></input>
                    <button type='submit'>Add to do</button>
                </form>
            </div>
        )
    }
}
