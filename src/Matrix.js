import React, { Component } from 'react';
import Cell from './Cell.js'


export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(val => <Cell value={val} />)
    //Once you have made your <Cell /> component, replace the return value in genRow's map to: <Cell value={val} />
  )
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: (() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  })()
}
