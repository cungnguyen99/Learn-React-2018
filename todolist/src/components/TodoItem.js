import React, { Component } from 'react';
import './TodoItem.css'
import checkimg from '../img/check-done.svg';
import checkComplete from '../img/check.svg'
var classNames = require('classnames');
/**
 * BÀI LIÊN QUAN 6,7,8,9,10,11,13,14, 15, 16
 */
class TodoItem extends Component {
  render() {
    //giống với việc viết item=this.props.item học trong bài js nâng cao khi 2 biến trùng tên
    const { item, onclick } = this.props
    let className = "todoItem"

    let url = checkimg
    //sử dụng cách bình thường để thêm class, thay đổi url nếu nó hoàn thành xong r
    if (item.isComplete) {
      className += " todoItem-complete"
      url=checkComplete
    }
    //sử dụng modul classNames
    var todoTime = classNames({
      'todoItem-time': item.isComplete
    })
    return (
      <div className={className}>
        {/* đáng phải cho onclick trên thể div nhưng muốn chỉ khi nhấn vào ảnh mới thay đổi trạng thái nên
        cho onclick xuống img */}
        <img onClick={onclick} src={url} />
        <p>{item.title} <span className={todoTime}>{item.time}</span></p>
      </div>
    );
  }
}

export default TodoItem;
