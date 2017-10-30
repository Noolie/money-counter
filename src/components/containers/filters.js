import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {chooseFilter} from './../../actions/choose-filter.js';
import {loadData} from './../../actions/load-data-action.js';

/* ICONS */
import allImg from './../../icons/all.png';
import foodImg from './../../icons/food.png';
import leaseImg from './../../icons/lease.png';
import cigaImg from './../../icons/ciga.png';
import transportImg from './../../icons/transport.png';
import taxesImg from './../../icons/taxes.png';
import otherImg from './../../icons/other.png';

class Filters extends Component{
  render(){
    return (
      <div className='filters'>
        <img onClick={this.props.loadData} src={allImg} alt='icon' className='filter-icon'/>
        <img onClick={() => this.props.chooseFilter('food')} src={foodImg} alt='icon' className='filter-icon'/>
        <img onClick={() => this.props.chooseFilter('lease')} src={leaseImg} alt='icon' className='filter-icon'/>
        <img onClick={() => this.props.chooseFilter('cigarettes')} src={cigaImg} alt='icon' className='filter-icon'/>
        <img onClick={() => this.props.chooseFilter('transport')} src={transportImg} alt='icon' className='filter-icon'/>
        <img onClick={() => this.props.chooseFilter('taxes')} src={taxesImg} alt='icon' className='filter-icon'/>
        <img onClick={() => this.props.chooseFilter('other')} src={otherImg} alt='icon' className='filter-icon'/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    loadData: loadData,
    chooseFilter: chooseFilter
  },dispatch)
}

export default connect(mapStateToProps,matchDispatchToProps)(Filters);
