import React, { Component } from 'react';
import './App.css';
import Todos from './Component/Todos';
import Header from './Component/Header';
import AddTodo from './Component/AddTodo';
import uuid  from 'uuid';


class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Wake up early',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Do sports',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Eat Breakfast',
        completed: false
      },
    ]
  }
  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }
  // Delete item
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }
// Add new item
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <div>
        <Header />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
