import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {clearAll} from './../../actions/clear-all-items.js';

class TotalAmount extends Component{

  getResults = () => {
    let totalQuantity = 0;
    for(let i = 0; i < this.props.data.length; i++){
      totalQuantity += Number(this.props.data[i].price)
    }
    return totalQuantity;
  }

  clearAll = () => {
    /*SUPPOSED TO CREATE A MODAL WINDOW TO CONFIRM*/
    console.log('clear-everting-function-supposed-to-be-here')
  }

  render(){
    return (
      <div className='currency'>
        <div className='current-result'>
          <p>TOTAL: {this.getResults()} UAH</p>
        </div>
        <div className='clear-all'>
          <button onClick={this.clearAll}>clear all</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    data: state.data
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    clearAll: clearAll
  })
}

export default connect(mapStateToProps, matchDispatchToProps)(TotalAmount);
