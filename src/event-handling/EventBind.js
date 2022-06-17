import React, { Component } from 'react'

class EventBind extends Component {

    constructor(){
        super()

        this.state = {
            message : "Hello"
        }
        // 3rd Approach
        //this.changeMessage = this.changeMessage.bind(this)
    }

    // changeMessage(){
    //     console.log(this)
    //     this.setState({
    //         message : "Thank You"
    //     })
    // }

    changeMessage = () => {
        console.log(this)
        this.setState({
            message : "Thank You"
        })
    }

  render() {
    return (  
      <div>
        <h1>{this.state.message}</h1>
        {/* <button className='btn btn-primary' onClick={(this.changeMessage)} >Click me</button> */}
        {/* 1st Approach */}
        {/* <button className='btn btn-primary' onClick={(this.changeMessage.bind(this))} >Click me</button> */}
        {/* 2nd Approach */}
        {/* <button className='btn btn-primary' onClick={()=>this.changeMessage()} >Click me</button> */}
        {/* 3rd Approach */}
        {/* <button className='btn btn-primary' onClick={this.changeMessage} >Click me</button> */}
        {/* 4th Approach */}
        <button className='btn btn-primary' onClick={this.changeMessage} >Click me</button>



      </div>
    )
  }
}

export default EventBind