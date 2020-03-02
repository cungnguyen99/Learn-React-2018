import React, { Component } from 'react';
import './TodoItem.css'
var classNames = require('classnames');
/**
 * BÀI LIÊN QUAN 6,7,8,9,10,11,13
 */
class TodoItem extends Component {
  render() {
    //giống với việc viết item=this.props.item học trong bài js nâng cao khi 2 biến trùng tên
    const { item, onclick } = this.props
    let className = "todoItem"

    //sử dụng cách bình thường để thêm class
    if (item.isComplete) {
      className += " todoItem-complete"
    }

    //sử dụng modul classNames
    var todoTime=classNames({
      'todoItem-time': item.isComplete
    })
    return (
      <div onClick={onclick} className={className}>
        <p>{item.title} <span className={todoTime}>{item.time}</span></p>
      </div>
    );
  }
}

export default TodoItem;
