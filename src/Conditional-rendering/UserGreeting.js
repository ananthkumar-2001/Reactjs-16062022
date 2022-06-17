import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(){
        super()

        this.state={
            isLoggedIn : true
        }
    }
  render() {
    const {isLoggedIn} = this.state
    if(isLoggedIn){
        return (
            <div>
              <h1>Welcome Ananth</h1>
            </div>
          )
    }
    else{
        return (
            <div>
              <h1>Welcome Guest</h1>
            </div>
          )
    }
  }
}

export default UserGreeting