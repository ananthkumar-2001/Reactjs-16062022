import React, { Component } from 'react'

export class Notify extends Component {
    constructor(){
        super()

        this.state = {
            name : "Ananth",
            city : "Guntur",
            isActive : true
        }
    }
  render() {
    const {name, city, isActive} = this.state
    return (
      <div>
        <h1>Name : {name}</h1>
        <h1>City : {city}</h1>
        <h1>IsActive : {isActive ? "true" : "false"}</h1>
      </div>
    )
  }
}

export default Notify