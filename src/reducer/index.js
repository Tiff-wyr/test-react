import { combineReducers } from 'redux'
import count from './count'
import todo from './todo'
import filterType from "./filterType"

export default combineReducers({
    count,
    todo,
    filterType
})