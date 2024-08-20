import React, { Component } from 'react'

export class Handler extends Component {
    state={
        msg:"hello"
    }
    gmHandler=()=>{
        this.setState({msg:"Good Morning"})
    }
    gnHandler=()=>{
        this.setState({msg:"Good Night"})
    }
    gaHandler=()=>{
        this.setState({msg:"Good Afternoon"})
    }
    geHandler=()=>{
        this.setState({msg:"Good Evening"})
    }
  render() {
    return (
      <div>
        <h2>Handler Event</h2>
        <h3>Value:{this.state.msg}</h3>
        <button onClick={this.gmHandler}>GM</button>
        <button onClick={this.gnHandler}>GN</button>
        <button onClick={this.gaHandler}>GA</button>
        <button onClick={this.geHandler}>GE</button>
    
      </div>
    )
  }
}

export default Handler