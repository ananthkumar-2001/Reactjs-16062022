import React, { Component } from 'react'

class StudentForm extends Component {
    constructor(){
        super()

        this.state = {
            username : "",
            password : "",
            comments : "",
            country : 0
        }
    }

    getFormData(){
        console.log(this.state.username)
        console.log(this.state.comments)
        console.log(this.state.country)
    }

    getUserName(event){
        this.setState({
            username : event.target.value
        })
    }

  render() {
    return (
      <div>
        <h1>Student Form</h1>
        <form >
            <div>
                <label>UserName</label>
                <input type="text" 
                        className='form-control w-50'
                        value={this.state.username}
                        onChange={(event)=> this.getUserName(event)} 
                />
            </div>
            <br />
            <div>
                <label>Comments</label>
                <textarea className='form-control w-50'
                          value={this.state.comments}
                          onChange={(event)=>this.setState({comments: event.target.value})}
                ></textarea>
            </div>
            <br />
            <div>
                <label>Country</label>
                <select className='form-select w-50'
                        value={this.state.country}
                        onChange={(event)=>this.setState({country: event.target.value})}
                >
                    <option value={0}>Select</option>
                    <option value={1}>India</option>
                    <option value={2}>Japan</option>
                    <option value={3}>USA</option>
                </select>
            </div> 
            <br /> 
            <div>
                <label>Password</label>
                <input type="password" 
                        className='form-control w-50'
                        value={this.state.password}
                        onChange={(event)=> this.setState({password: event.target.value})} 
                />
            </div>
            <br />
            <div>
                <input type="button" value="Submit" 
                        className='btn btn-primary'
                        onClick={()=>this.getFormData()}
                />
            </div>
        </form>
      </div>
    )
  }
}

export default StudentForm