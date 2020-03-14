import React, { Component } from 'react';
import './App.css';
import Accordion from './component/Accordion'
import Counter from './component/Counter'
class App extends Component {
  constructor(props){
    super(props)
    //Demo bài 20 
    this.inputElement=React.createRef()
    //Demo bài 21
    this.state={
      showCounter: true
    }
  }

  //demo bài 20
  componentDidMount(){
    //current là cái DOM mà được gắn trong ref của một element nào đó. trong TH này là thẻ input
    this.inputElement.current.focus()
  }

  //demo bài 21
  componentDidUpdate(){
    console.log('App updated')
  }
  removeCounter(){
    this.setState({
      showCounter: false
    })
  }
  render(){
    console.log('App render')
    return (
      <div className="App">
        {/* Demo bài 18 */}
        <Accordion heading="Toyota">
          {/* Đây là phần this.props.children */}
          Mercedes-Benz is a German global automobile marque and a division 
          of Daimler AG. Mercedes-Benz is known for luxury vehicles, vans, trucks, buses, 
          coaches and ambulances. The headquarters is in Stuttgart, Baden-Württemberg.
        </Accordion>
  
        {/* Demo bài 20. Bài toán khi vừa load trang cho trỏ chuột nhảy vào ô input.
            Ta dùng focus của input để làm, do trong html có DOM nên chỉ cần input.focus() nhưng
            trong react ô input ở dưới không phải là DOM nên phải truy xuất kiểu khác */}
        <input type="text" ref={this.inputElement}/>

        {/* Demo bài 21 */}
        <button onClick={()=>this.removeCounter()}>Remove counter</button>
        {this.state.showCounter && <Counter/>}
      </div>
    );
  }
}

export default App;
