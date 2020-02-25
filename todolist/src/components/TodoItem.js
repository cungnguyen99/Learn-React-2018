import React, { Component } from 'react';

class TodoItem extends Component {
  render(){
    return (
      <div className="todoItem">
          <p>{this.props.title} <span>{this.props.option.time}</span></p>
      </div>
    );
  }
}

export default TodoItem;
