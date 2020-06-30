import React, { Component } from 'react'
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text
        }
    }
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log("子组件getDerivedState阶段")
    //     return null
    // }
    componentWillReceiveProps() {
        console.log('子组件的willReceiveProps')
    }
    render() {
        console.log("list的render 阶段")
        return (<div>
            {this.state.text}
        </div>);
    }
}
export default List;