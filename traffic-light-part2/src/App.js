import React, { Component } from 'react';
import TrafficLight from './components/TrafficLight'
import './App.css';
/**
 *vấn đề khi ta muốn tự mình thay đổi sau bao nhiêu giây mới cho nó thay đổi ta phải thay đổi
 *cấu trúc của nó để khi ta truyền giá trị vào trong App.js thì trong TrafficLight sẽ nhận giá trị để thay đổi
 */
const RED=0;
const ORANGE=1;
const GREEN=2;
class App extends Component {
  constructor(){
    super();
    this.state={
        currentColor: RED
    }

    setInterval(()=>{
        this.setState({ 
          currentColor: this.getNextColor(this.state.currentColor)
        })
    },1000)
}

getNextColor(color){
  switch(color){
      case RED: 
          return ORANGE;
      case ORANGE:
          return GREEN;
      case GREEN:
          return RED;
      default: 
          return RED;
  }
}
  render(){
    const {currentColor}=this.state
    return (
      <div className="App">
        <TrafficLight currentColor={currentColor}/>
      </div>
    );

  }
}

export default App;
