import React, { Component } from 'react'

export class GreetingsOne extends Component {
  render() {
    const {id,name,isAdmin,details,info,address,getMessage,getMsg,skills,children} = this.props
    return (
      <div>
        <h4>Id: {id}</h4>
        <h4>Name: {name}</h4>
        <h4>IsAdmin: {isAdmin ? "true" : "false"}</h4>
        <h4>Details: {details ? details: "No Details Available"}</h4>
        <h4>Info: {info ? info : "No Information is found"}</h4>
        <h4>Address: {address.city}</h4>
        <h4>GetMessage: {getMessage}</h4>
        <h4>GetMsg: {getMsg()}</h4>
        <h4>Skills: {skills[0]}</h4>
        <h4>Child: {children}</h4>
      </div>
    )
  }
}

export default GreetingsOne