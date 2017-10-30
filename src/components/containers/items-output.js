import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadData} from './../../actions/load-data-action.js';
import {removeItem} from './../../actions/remove-item-action.js';

 class ItemList extends Component{

   removeItem = (ev) =>{
     return this.props.removeItem(ev.target.getAttribute('data-id'))
   }

   mapData = () => {
     return this.props.data.reverse().map((item)=>{
       return (
         <li className='added-item' key={item.id}>
           <p>name: <b>{item.name}</b></p>
           <p>price: <b>{item.price}</b> uah</p>
           <p>category: <b>{item.category}</b></p>
           <p>time: <b>{item.time}</b></p>
           <button data-id={item.id} onClick={this.removeItem}>remove</button>
         </li>
       )
     })
   }

   render(){
     if(this.props.data.length < 1){
       return (
         <h1 className='notification'>no items</h1>
       )
     }
     return (
       <ul className='item-list'>
         {this.mapData()}
       </ul>
     )
   }

   componentDidMount(){
    this.props.loadData()
   }

 }

function mapStateToProps(state){
  return {
    data: state.data
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    loadData: loadData,
    removeItem: removeItem
  },dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ItemList);
