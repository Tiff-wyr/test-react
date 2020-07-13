const todo = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            let id = new Date().getTime()
            let todo = action.text ? [{
                id,
                text: action.text,
                checked: false,
                del: false
            }, ...state] : [...state];
            return todo
        case "DEL_TODO":
            return state.map(item => (item.id === action.id) ? {...item, del: !item.del} : item);
        case "EDIT_TODO": 
            return state.map(item => (item.id === action.id) ? { ...item, text: action.text } : item);
        case "TOGGLE_ITEM":
            return state.map(item => (item.id === action.id) ? { ...item, checked: !item.checked } : item);
        default:
            return state;
    }
};

export default todo;