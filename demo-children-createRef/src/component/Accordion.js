import React, {Component} from 'react'
// Bài liên quan 18, 20
class Accordion extends Component{
    constructor(props){
        super(props);
        this.state={
            isCollapsed:true
        }
    }

    onClick(){
        this.setState({
            isCollapsed: !this.state.isCollapsed
        })
    }
    render(){
        const {heading, children}=this.props
        const {isCollapsed}=this.state
        return   <div className="Accordion">
                    <div className="Heading" onClick={()=>this.onClick()}><h2>{heading}</h2></div>
                    {!isCollapsed && <div className="Content">{children}</div>}
                </div>
    }
} 

export default Accordion