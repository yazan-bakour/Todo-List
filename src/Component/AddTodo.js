import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''})
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                    type="text"
                    style={{flex: '10', borderTop: 'none', borderLeft: 'none', paddingLeft: '5px' }}
                    name="title"
                    placeholder="...Add..Item..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    type="submit" 
                    value="Submit" 
                    className="btn" 
                    style={{flex: 1, padding: '8px 5px', color: '#fff', border: 'none' }}
                    onClick={this.add}
                />
            </form>
        )
    }
}

export default AddTodo
