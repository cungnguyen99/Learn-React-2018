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
    /**
     * Render ra với điều kiện cho trước( với cách bình thường): nếu k có sản phẩm thì render ra chữ Nothing here
     * còn nếu có sp thì render ra các sản phẩm
     */
    return (
      <div className="App">
        {
          this.todoList.length>0&&this.todoList.map((item, index) => <TodoItem key={index} item={item} />)
        }
        {
          this.todoList.length===0&&'Nothing here'
        }
      </div>
    );
  }
}

export default App;
