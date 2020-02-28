import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
class App extends Component {
  constructor() {
    super();
    this.todoList = [
      { title: 'Go to shopping',time:'5h', isComplete: true },
      { title: 'Go to school',time:'7h' },
      { title: 'Play game', time:'9h30' }
    ]
  }
  render() {
    return (
      <div className="App">
        {
          this.todoList.map((item, index) => <TodoItem key={index} item={item} />)
        }
      </div>
    );
  }
}

export default App;
