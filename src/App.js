import React, {Component} from 'react';
import './App.css';
import List from './page/list'
import Count from './page/count'

class App extends Component {
  constructor(props) {
    super(props)
    console.log("初始化app")
    this.state = {
      list: ['0','1'],
      num: 1,
      countKey: 100,
      text: '数据'
    }
  }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log("父组件getDerivedState阶段")
  //   return null
  // }
  shouldComponentUpdate() {
    console.log("app should update")
    return true
  }
  addList () {
    console.log('添加列表')
    let list = [this.state.list.length, ...this.state.list]
    this.setState({
      list
    })
  }
  delList () {
    let list = this.state.list
    list.pop()
    this.setState(
      {
        list
      }
    )
  }
  addNum() {
    this.setState({
      num: this.state.num,
      countKey: this.state.countKey
    })
    this.setState({
      list: [1]
    })
  }
  componentDidMount() {
    console.log("app mount end")
  }
  componentDidUpdate() {
    console.log("app update end")
  }
  render() {
    console.log("父组件的render")
    return (
      <div>
        <button onClick={() => { this.addList() }}>add</button> 
        <button onClick={() => { this.delList() }}>del</button>
        {this.state.list.map((item, index) => <List text={item} key={item}></List> )}
        <Count num={this.state.num} key={this.state.countKey} text={this.state.text}></Count>
        <button onClick={() => {this.addNum()}}>+1</button>
      </div>
    );
  }
}

export default App;
