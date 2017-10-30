export const addNewItem = (newItem) => {
  return {
    type: 'NEW_ITEM_ADDED',
    payload: newItem
  }
}
