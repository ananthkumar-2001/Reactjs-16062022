import React, { Component } from 'react'

class ClassClick extends Component {

    clickHandler(){
        console.log("Button is clicked - class")
    }
  render() {
    return (
      <div>
        <br />
        <button className='btn btn-primary'
                onClick={this.clickHandler}
        >Click Class</button>
      </div>
    )
  }
}

export default ClassClick