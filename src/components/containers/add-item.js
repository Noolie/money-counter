import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addNewItem} from './../../actions/add-item-action.js';

class AddForm extends Component{

  createNewItem = () => {
    let newItem = {
      id: Date.now().toString(),
      name: this.refs.itemName.value.trim() || 'gandoni',
      price: Number(this.refs.itemPrice.value) || 25,
      category: this.refs.itemCategory.options[this.refs.itemCategory.selectedIndex].value,
      time: new Date().toLocaleString()
    }
    this.refs.itemName.value = '';
    this.refs.itemPrice.value = 0;
    return this.props.addNewItem(newItem)
  }

  render(){
    return (
      <div className='add-new-item'>
        <p>item</p>
        <input ref='itemName' type='text' />
        <p>price</p>
        <input ref='itemPrice' type='number' />
        <p>category</p>
        <select ref='itemCategory'>
          <option value='food'>food</option>
          <option value='lease'>lease</option>
          <option value='cigarettes'>cigarettes</option>
          <option value='transport'>transport</option>
          <option value='taxes'>taxes</option>
          <option value='other'>other</option>
        </select>
        <button onClick={this.createNewItem}>add item</button>
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
    addNewItem: addNewItem
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(AddForm);
