import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItems extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            color: this.props.todo.completed ? 'red' : '#333',
            padding: '10px 5px',
            borderBottom: 'solid 1px',
            borderColor: this.props.todo.completed ? 'red' : 'green'
        }
    }

    getBtnStyle = () => {
        return {
            background: this.props.todo.completed ? 'red' : 'green',
            color: '#fff',
            border: 'none',
            padding: '2px 6px',
            marginRight: '5px',
            borderRadius: '50%',
            float: 'right'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={ this.getStyle() }>
                <p style={{margin: 0 }}>
                    <input type="checkbox" className="btn" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    <span>{ title }</span>
                    <button onClick={this.props.delTodo.bind(this, id)} className="btn" style={ this.getBtnStyle() }>x</button>
                </p>
            </div>
        )
    }
}

// Validator propeties
TodoItems.prototypes = {
	todo: PropTypes.object.isRequired
}


export default TodoItems
