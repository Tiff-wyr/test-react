import React, { Component } from 'react'
class List extends Component {
    constructor(props) {
        console.log('list组件的初始化')
        super(props);
        this.state = {
            text: this.props.text
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("list子组件getDerivedState阶段")
        return null
    }
    // UNSAFE_componentWillReceiveProps() {
    //     console.log('list子组件的willReceiveProps')
    // }
    render() {
        const {text} = this.props
        return (<div>
            {text}<input></input>
        </div>);
    }
}
export default List;