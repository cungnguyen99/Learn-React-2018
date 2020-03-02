import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
class App extends Component {
  /**
   * Phải thêm biến state vào rồi bind this ở dưới để hàm onItemClick biết biến this đấy là của App
   */
  constructor(state) {
    super(state);
    this.state={
      todoList : [
        { title: 'Go to shopping',time:'5h', isComplete: true },
        { title: 'Go to school',time:'7h' },
        { title: 'Play game', time:'9h30' }
      ]
    }
    this.onItemClick=this.onItemClick.bind(this)
  }

  onItemClick(index){
    this.setState({
      todoList: this.state.todoList[index].isComplete=!this.state.todoList[index].isComplete
    })
    console.log(this.state.todoList)
  }
  render() {
    const {todoList}=this.state
    /**
     * Render ra với điều kiện cho trước( với cách bình thường): nếu k có sản phẩm thì render ra chữ Nothing here
     * còn nếu có sp thì render ra các sản phẩm
     */
    return (
      <div className="App">
        {
          todoList.length>0&&todoList.map((item, index)=> 
           <TodoItem key={index} item={item} onclick={()=>this.onItemClick(index)} />)
        }
        {
          todoList.length===0&&'Nothing here'
        }
      </div>
    );
  }
}

export default App;
