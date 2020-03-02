import React, { Component } from 'react';
import classNames from 'classnames'
import './TrafficLight.css'
/**
 * BÀI LIÊN QUAN 12
 */
const RED=0;
const ORANGE=1;
const GREEN=2;
class TrafficLight extends Component {
  render(){
    return (
      <div className="TrafficLight">
        <div className={classNames('bulb','red',{
            'active': this.props.currentColor===RED
        })}/>
        <div className={classNames('bulb','orange',{
            'active': this.props.currentColor===ORANGE
        })}/>
        <div className={classNames('bulb','green',{
            'active': this.props.currentColor===GREEN
        })}/>
      </div>
    );

  }
}

export default TrafficLight;
