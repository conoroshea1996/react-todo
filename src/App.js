import React from 'react';
import Todos from './components/todos/Todos';
import AddFom from './components/Form/AddForm';
import '../src/app.css';
class App extends React.Component {
  state = {
    todos: [
      { id: 1, content: 'Eat ceral' },
      { id: 2, content: 'Clean ceral bowl' }
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
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="App" >
        <div className="container">
          <h1>To-Dos</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
          <AddFom addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}
export default App;
