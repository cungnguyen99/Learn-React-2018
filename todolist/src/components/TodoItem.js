import React, { Component } from 'react';

class TodoItem extends Component {
  render(){
    return (
      <div className="todoItem">
          <p>{this.props.title+this.props.option.a}</p>
      </div>
    );
  }
}

export default TodoItem;
