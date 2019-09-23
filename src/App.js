import React from 'react';
import Todos from './components/todos'
class App extends React.Component {
  state = {
    todos: [
      { id: 1, content: 'Eat ceral' },
      { id: 2, content: 'Clean ceral bowl' }
    ]
  }
  render() {
    return (
      <div className="App" >
        <h1>To-Dos</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}
export default App;
