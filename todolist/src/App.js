import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import tick from './img/tick.svg'
class App extends Component {
  /**
   * Phải thêm biến state vào rồi bind this ở dưới để hàm onItemClick biết biến this đấy là của App
   */
  constructor(state) {
    super(state);
    this.state={
      newItem:'',
      todoList : [
        { title: 'Go to shopping',time:'5h', isComplete: true },
        { title: 'Go to school',time:'7h' },
        { title: 'Play game', time:'9h30' }
      ]
    }
    /**
     * Không có dòng dưới cũng được vì onItemClick ở trong nó cũng đã trả về một func khác(arrow func)
     * nên không cần bind theo this.
     */
    this.onItemClick=this.onItemClick.bind(this)
    this.onKeyUp=this.onKeyUp.bind(this)
    this.onChange=this.onChange.bind(this)
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

  //sự kiện onchange phải đi cùng với thuộc tính value trong input
  onChange(event){
    this.setState({
      newItem: event.target.value
    })
  }
  onKeyUp(event){
    let text=event.target.value
    if(event.keyCode===13){//key của nút enter là 13
      if(!text){
        return
      }
      text=text.trim();//cắt bỏ dấu cách ở đầu và cuối
  
      if(!text) {
        return
      }
  
      this.setState({
        todoList:[
          {title: text, isComplete:false},
          ...this.state.todoList
        ]
      })
    }
  }
  render() {
    const {todoList,newItem}=this.state
    /**
     * Render ra với điều kiện cho trước( với cách bình thường): nếu k có sản phẩm thì render ra chữ Nothing here
     * còn nếu có sp thì render ra các sản phẩm
     */
    return (
      <div className="App">
        <div className="Header">
          <img src={tick} width={32} height={32}/>
          <input 
            type="text"
            placeholder='Add a new item'
            onKeyUp={this.onKeyUp}
            value={newItem}
            onChange={this.onChange}
           />
        </div>
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
