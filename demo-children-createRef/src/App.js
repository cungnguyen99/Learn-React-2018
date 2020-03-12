import React, { Component } from 'react';
import './App.css';
import Accordion from './component/Accordion'
class App extends Component {
  constructor(props){
    super(props)

    //Demo của phần 
    this.inputElement=React.createRef()
  }

  componentDidMount(){
    /**
     * componentDidMount: sau khi tạo ra các element trong App nó sẽ tạo các component tương ứng mà nó 
     * dùng ở trong này
     */
    //current là cái DOM mà được gắn trong ref của một element nào đó. trong TH này là thẻ input
    this.inputElement.current.focus()
  }
  render(){
    return (
      <div className="App">
        {/* Demo phần children bài 18 */}
        <Accordion heading="Toyota">
          {/* Đây là phần this.props.children */}
          Mercedes-Benz is a German global automobile marque and a division 
          of Daimler AG. Mercedes-Benz is known for luxury vehicles, vans, trucks, buses, 
          coaches and ambulances. The headquarters is in Stuttgart, Baden-Württemberg.
        </Accordion>
  
        {/* Demo phần React.createRef bài 20. Bài toán khi vừa load trang cho trỏ chuột nhảy vào ô input.
            Ta dùng focus của input để làm, do trong html có DOM nên chỉ cần input.focus() nhưng
            trong react ô input ở dưới không phải là DOM nên phải truy xuất kiểu khác */}
        <input type="text" ref={this.inputElement}/>
      </div>
    );
  }
}

export default App;
