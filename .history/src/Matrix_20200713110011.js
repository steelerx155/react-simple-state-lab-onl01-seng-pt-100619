import React, { Component } from 'react';
import Cell from './cell.js'

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div className ="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}
Matrix.defaultProps = {
  values:  [
    ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
    ['#F00', '#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00', '#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00', '#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00', '#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00', '#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00', '#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00', '#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00', '#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00'],
    ['#F00', '#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00','#F00']

  ]
}

// export default Matrix 
