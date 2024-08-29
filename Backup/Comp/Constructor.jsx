import React, { Component } from 'react'

export class Constructor extends Component {
    state;
    constructor(props){
        super(props);
        console.log("first");
        this.state={    msg:"Vanakkam" }
    }
        karthick=(value)=>{
            this.setState({msg:value})
        }
    
  render() {
    console.log("second");
    return (
      <div>
        <h2>Constructor</h2>
        <h3>Value:{this.state.msg}</h3>
        <button onClick={this.karthick.bind(this,"gm")}>GM</button>
      </div>
    )
  }
}

export default Constructor
