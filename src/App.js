import React, {Component} from 'react';
import './App.css';
import List from './page/list'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ['hello','word']
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("父组件getDerivedState阶段")
    return null
  }
  addList () {
    console.log('添加列表')
    let list = [...this.state.list, '123']
    this.setState({
      list
    })
  }
  render() {
    console.log("父组件的render")
    return (
      <div>
       {this.state.list.map((item, index) => <List text={item} key={index}></List> )}
       <button onClick={()=>{this.addList()}}>添加</button>
      </div>
    );
  }
}

export default App;
