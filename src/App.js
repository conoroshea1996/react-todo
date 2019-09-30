import React from 'react';
import Todos from './components/todos/Todos';
import AddFom from './components/Form/AddForm';
import '../src/app.css';

class App extends React.Component {
  state = {
    todos: [
      { id: 1, content: 'Eat ceral', done: false },
      { id: 2, content: 'Clean ceral bowl', done: true }
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    })
    this.setState({
      todos
    })
  }


  addTodo = (todo) => {
    todo.id = Math.random();
    if (todo.content.length === 0) {
      alert('Todo cant be empty')
    }
    else {
      let todos = [...this.state.todos, todo]
      this.setState({
        todos
      })
    }
  }

  toggleTodo = (id) => {
    let todo = this.state.todos.find(todo => todo.id === id);
    todo.done = !todo.done;
    this.setState({
      data: this.state.todos.map(el => (el.id === id ? { ...el, todo } : el))
    });
  }

  render() {
    return (
      <div className="App" >
        <div className="container">
          <h1>To-Dos</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} toggleTodo={this.toggleTodo} />
          <AddFom addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}
export default App;
