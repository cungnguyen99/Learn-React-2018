import React from "react"
import './WeeklySongListItem.css';
/**
 * 
 * Bài 25 sử dụng function để viết
 * function nhận props là tham số đầu vào, còn class dùng props với cú pháp this.props để truy xuất vào các 
 * thuộc tính còn function lấy props chấm luôn. Funciton không có state và không có life crile
 */
function WeeklySongListItem2(props) {

  const { order, title, singer, viewCount } = props;
  return (
    <div className="WeeklySongListItem2">
      <div className="order">{order}</div>
      <div className="info">
        <p className="title">{title}</p>
        <p className="singer">{singer}</p>
      </div>
      <div className="view-count">{viewCount.toLocaleString()}</div>
    </div>
  );
}

export default WeeklySongListItem2;