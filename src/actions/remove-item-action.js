export const removeItem = (removedItem) => {
  return {
    type: 'ITEM_REMOVED',
    payload: removedItem
  }
}
