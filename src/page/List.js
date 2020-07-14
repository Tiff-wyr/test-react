import React, { Component } from 'react'
import { connect } from "react-redux"
import { addTodo, delTodo, setFilterType, editTodo, toggleItem} from '../action'

import ListItem from "./ListItem"

class List extends Component {
    constructor(props) {
        super()
    }
    render(){
        const { todo, addTodo, delTodo, toggleTodo, editTodo, toggleItem } = this.props
        return (
            <div>
                <input style={{ width: '190px' }} 
                    onKeyDown={(e) => { if (e.keyCode === 13) { addTodo(e.target.value); e.target.value = ''} } } 
                    placeholder="请输入任务" 
                    onBlur={(e) => { addTodo(e.target.value); e.target.value = ''}} />
                <div>
                    {todo.length > 0 ? todo.map((item) => 
                    <ListItem key={item.id}
                        index={item.id}
                        checked={item.checked}
                        del={item.del}
                        text={item.text}
                        delList={() => { delTodo(item.id)}}
                        recoverItem={(n) => { delTodo(item.id) }}
                        editItemText={(n,text) => { editTodo(item.id, text)}}
                        checkBox={(n) => { toggleItem(item.id) }}
                        ></ListItem>)
                        : (<span>暂无数据...</span>)}
                </div>
                <button onClick={() => { toggleTodo('ALL') }}>all</button>
                <button onClick={() => { toggleTodo('FINISHED') }}>finished</button>
                <button onClick={() => { toggleTodo('UNFINISHED') }}>unfinished</button>
                <button onClick={() => { toggleTodo('DEL') }}>del</button>
            </div>
        )
    }
}

const getVisibleTodos = (todos = [], filter) => {
    switch (filter) {
        case 'FINISHED':
            return todos.filter(t => t.checked && !t.del)
        case 'UNFINISHED':
            return todos.filter(t => !t.checked && !t.del)
        case 'DEL':
            return todos.filter(t => t.del)
        case 'All':
        default:
            return todos.filter(t => !t.del)
    }
}

const mapStateToProps = state => {
    return {
        todo: getVisibleTodos(state.todo, state.filterType)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => {
            dispatch(addTodo(text))
        },
        delTodo: (id) => {
            dispatch(delTodo(id))
        },
        toggleTodo: (filterType) => {
            dispatch(setFilterType(filterType))
        },
        editTodo: (id, text) => {
            dispatch(editTodo(id, text))
        },
        toggleItem: (id) => {
            dispatch(toggleItem(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)