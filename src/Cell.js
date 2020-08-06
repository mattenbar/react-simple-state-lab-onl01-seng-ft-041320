import React, { Component } from 'react';

export default class Cell extends Component{

  constructor(props) {
    super()
    this.state = {
      color: props.value
    } // ...define initial state with a key of 'color' set to the 'value' prop
  }

  handleClick = () => {
    //Create a click listener which, when activated, updates the state to the following hex value: '#333'
    this.setState({
      color: '#333'
    })
  }

  render (){
    return(
      <div 
        className="cell" 
        style={{backgroundColor: this.state.color}} 
        onClick={this.handleClick}>
      </div>
    )
  }
}