import React, { Component } from 'react'

export class Message extends Component {
    constructor(){
        super()

        this.state = {
            message : "Welcome",
            name : "Ananth"
        }
    }

    subscribe(){
        this.setState({
            
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message} {this.state.name}</h1>
        <button className='btn btn-primary'
                onClick={()=>this.subscribe()}
        >Subscribe</button>
      </div>
    )
  }
}

export default Message