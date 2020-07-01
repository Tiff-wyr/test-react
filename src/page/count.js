import React, { Component } from 'react'

class Count extends Component {
    constructor(props) {
        console.log("初始化count")
        super(props)
        this.state = {
            num: this.props.num,
            text: this.props.text + '是：'
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('count 的 willReceived', nextProps === this.props)
        if (nextProps.num !== this.props.num) {
            console.log("ReceiveProps获取到了新的props", nextProps, this.props)
            // this.setState({
            //     num: nextProps.num
            // })
        }
    }
    // static getDerivedStateFromProps(nextProps) {
    //     console.log("count组件的derived")
    //     return null
    // }
    // shouldComponentUpdate(nextProps) {
    //     if (nextProps.num !== this.props.num) {
    //         console.log("shouldup获取到了新的props", nextProps, this.props)
    //         return true
    //     }
    //     return false
    // }
    UNSAFE_componentWillUpdate() {
        console.log("count组件将要更新")
    }
    componentDidUpdate() {
        console.log("count update end")
    }
    render(){
        console.log("count组件的render")
        const { num } = this.props
        return (
            <div>{this.state.text}{num}</div>
        )
    }
}

export default Count