export const addCount = () => ({
  type: "ADD_COUNT"
});
export const minusCount = () => ({
    type: "MINUS_COUNT"
});

// todoList 
export const addTodo = (text) => ({
  type: "ADD_TODO",
  text
});
export const delTodo = (id) => ({
  type: "DEL_TODO",
  id
});
export const editTodo = (id, text) => ({
  type: "EDIT_TODO",
  id,
  text
})
export const toggleItem = (id) => ({
  type: 'TOGGLE_ITEM',
  id
})

// filterType
export const setFilterType = (filterType) => ({
  type: "SET_FILTER",
  filterType
})