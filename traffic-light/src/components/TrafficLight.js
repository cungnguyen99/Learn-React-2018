import React, { Component } from 'react';
import classNames from 'classnames'
import './TrafficLight.css'
const RED=0;
const ORANGE=1;
const GREEN=2;
class TrafficLight extends Component {
  constructor(){
      super();
      /**
       * gọi constructor của lớp cha(lớp Components) và thêm một thuộc tính nữa là currentColor 
       * gtri ban đầu là RED, học trong bài 13 JS nâng cao kế thừa trong class, ta sẽ viết như sau
       * this.currentColor=RED; nhưng ta phải dùng state. state là biến để lưu giá trị nội tại của
       * một component. mà currentColor là một biến thay đổi liên tục không giữ nguyên một giá trị
       * cố định nên ta phải xét cho nó là kiểu state và có thể viết là this.state.currentColor=RED;
       * nhưng ta có cách viết tương tự
       */
      this.state={
          currentColor: RED
      }

      setInterval(()=>{
          /**
           * Khi sử dụng state rồi mà muốn thay đổi giá trị của state đó ta không viết là
           * this.state.currentColor= gì đó mà ta phải dùng setState và truyền vào thuộc tính muốn thay đổi
           * Được phép lấy ra giá trị của state là this.state.currentColor nhưng không được phép
           * thay đổi trục tiếp giá trị của state bằng cách this.state.currenColor= giá trị nào đó
           * mà phải dùng setState.
           * TRONG MỘT REACT COMPONENT THÌ HÀM render() ĐƯỢC TỰ ĐỘNG GỌI KHI DATA THAY ĐỔI CHÍNH VÌ THẾ
           * MÀ TA KHÔNG CẦN GỌI NÓ TRONG HÀM getNextColor() NHƯNG NÓ VẪN THỰC HIỆN NHỮNG GÌ ĐƯỢC VIẾT
           * TRONG HÀM render()
           */
          this.setState({ 
            /**
             * Ban đầu currenColor sẽ là đỏ, sau 1000ms gọi lại hàm setState sẽ thay đổi giá trị của currenColor
             * theo hàm getNextColor, do bđ là RED thì this.getNextColor(this.state.currentColor)
             * sẽ là this.getNextColor(RED), màu truyền vào hàm getNextColor là RED nên sẽ return ra ORANGE
             * => màu từ đỏ chuyển sang cam, cứ như vậy chuyển sang các màu tiếp theo.
             * Khi giá trị state thay đổi thì hàm render tự động được gọi nên mặc dù k gọi nó trong này
             * nó vẫn sẽ tự động chạy
             */
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
    const {currentColor}=this.state;
    return (
      <div className="TrafficLight">
          {/*sử dụng modul classNames truyền vào tên các class và điều kiện của nó để sd class đó nếu có */}
        <div className={classNames('bulb','red',{
            //currentColor===RED tương đương this.state.currentColor===RED
            'active': currentColor===RED
        })}/>
        <div className={classNames('bulb','orange',{
            'active': currentColor===ORANGE
        })}/>
        <div className={classNames('bulb','green',{
            'active': currentColor===GREEN
        })}/>
      </div>
    );

  }
}

export default TrafficLight;
