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

  onItemClick(item){
    /**
     * tạo mảng mới bằng cú pháp trong es6. do {todoList}=this.state sẽ là let todoList=this.state.todoList
     * mà this.state.todoList lại là một mảng nên todoList(ở vế trái) cũng là một mảng coppy từ mảng todoList
     * trong state.
     * Vd: var a={b:[1,2,3,4]}
     * var {b}=a tương đương var b=b.a nên khi ta log b ra sẽ có một mảng b với các ptu [1,2,3,4]
     * C1:
     * let {todoList}=this.state
     * todoList[index].isComplete=!todoList[index].isComplete
     * this.setState({todoList})
     * thì ở hàm render dòng onclick={()=>this.onItemClick(index) phải thế này
     * <TodoItem key={index} item={item} onclick={()=>this.onItemClick(index)}/>)
     */

     //C2:
     return(event)=>{
       const isComplete=item.isComplete
       const {todoList}=this.state
       const index=todoList.indexOf(item)
       console.log(item)
       this.setState({
         todoList:[
           ...todoList.slice(0, index),
           {...item, isComplete: !isComplete},
           ...todoList.slice(index+1)
         ]
       })
     }

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
           <TodoItem key={index} item={item} onclick={this.onItemClick(item)} />)
        }
        {
          todoList.length===0&&'Nothing here'
        }
      </div>
    );
  }
}

export default App;
