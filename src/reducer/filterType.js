const filterType = (state = 'ALL', action) => {
    switch (action.type) {
        case "SET_FILTER":
            return action.filterType
        default:
            return state;
    }
};

export default filterType;