import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

import './TodoItem.css'
import checkimg from '../img/check-done.svg';
import checkComplete from '../img/check.svg'
var classNames = require('classnames');
/**
 * BÀI LIÊN QUAN 6,7,8,9,10,11,13,14, 15, 16,17, 19
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
 
/**BÀI 19: PROPS TYPES */
TodoItem.propTypes ={
    //item là một obj gồm các thuộc tính trong shape
    item: PropTypes.shape({
    isComplete: PropTypes.bool,
    //nếu là thuộc tính bắt buộc phải có thì thêm isRequired
    title: PropTypes.string.isRequired,
    time: PropTypes.string
  }),
  onClick: PropTypes.func
  /**
   * 1.Trong trường hợp giả sử TodoItem có thêm thuộc tính timeComplete mà muốn chỉ nhận vào 1 trong các
   * giá trị có sẵn mặc định thì ta viết như sau(có thể truyền vào bất kỳ kiểu gì k nhất thiết phải là string)
   * timeDone: PropTypes.oneOf(['AM','PM'])
   * 2.Trong trường hợp muốn thuộc tính đó được truyền vào một trong 2 kiểu
   * PropTypes.oneOfType([PropTypes.string, PropTypes.number])
   * 3.Muốn thuộc tính đó là một mảng gồm các số
   * PropTypes.arrayOf(PropTypes.number)
   */
}
export default TodoItem;
