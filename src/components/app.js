import React, { Component } from 'react';
import AddForm from './containers/add-item.js';
import ItemList from './containers/items-output.js';
import TotalAmount from './containers/total-amount.js';
import Filters from './containers/filters.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Filters />
        <TotalAmount />
        <AddForm />
        <ItemList />
      </div>
    );
  }
}

export default App;
