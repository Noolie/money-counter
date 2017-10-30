export const chooseFilter = (currentFilter) => {
  return {
    type: 'FILTER_CHOSEN',
    payload: currentFilter
  }
}
