export default function(state=[], action){
  switch (action.type) {
    case 'LOAD_CURRENT_DATA':
      console.log(action.payload)
      if(localStorage.length > 0){
        let oldStoreData = [];
        for(let key in localStorage){
          oldStoreData.push(JSON.parse(localStorage[key]))
        }
        return oldStoreData
      } else {
        return state
      }
    case 'NEW_ITEM_ADDED':
      localStorage.setItem(action.payload.id, JSON.stringify(action.payload))
      return [
        ...state,
        action.payload
      ]
    case 'ITEM_REMOVED':
      if(localStorage.length > 0){
        for(let key in localStorage){
          if(key === action.payload){
            localStorage.removeItem(action.payload)
          }
        }
      }

      let newData = state.slice();
      for(let i = 0; i < newData.length; i++){
        if(newData[i].id === action.payload) {
          newData.splice(i, 1)
        }
      }
      return newData
    case 'CLEAR_ALL_ITEMS':
      localStorage.clear();
      return action.payload
    case 'FILTER_CHOSEN':
      console.log(action.payload)
      let filteredData = [];
      for(let key in localStorage){
        if(JSON.parse(localStorage[key]).category === action.payload){
          filteredData.push(JSON.parse(localStorage[key]))
        }
      }
      return filteredData;
    default: return state
  }
}
