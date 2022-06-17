import React, { Component } from 'react'

class UserGreetingOne extends Component {
    constructor(){
        super()

        this.state={
            isLoggedIn : true
        }
    }
  render() {
    const {isLoggedIn} = this.state
    let message;
    if(isLoggedIn){
        message = <div><h1>Welcome Ananth</h1></div>
    }
    else{
        message = <div><h1>Welcome Guest</h1></div>
    }
    return message
  }
}

export default UserGreetingOne