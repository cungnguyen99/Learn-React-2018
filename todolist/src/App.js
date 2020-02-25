import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
class App extends Component {
  constructor() {
    super();
    this.todoList = [
      'Go to shopping',
      'Go to school',
      'Play game'
    ]
  }
  render() {
    return (
      <div className="App">
        {
          this.todoList.map((item, index) => <TodoItem key={index} title={item} option={{ time: '5h', day: 7 }} />)
        }
      </div>
    );
  }
}

export default App;
