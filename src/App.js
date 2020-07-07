import React, {Component} from 'react';
import './App.css';
import ListItem from './page/ListItem'
// import Count from './page/count'

class App extends Component {
  constructor(props) {
    super(props)
    console.log("初始化app")
    this.state = {
      arr: [
        {
          id: '1',
          checked: true,
          text: "语文",
          del: false
        },
        {
          id: '2',
          checked: false,
          text: "数学",
          del: false
        },
        {
          id: '3',
          checked: false,
          text: "英语",
          del: false
        },
        {
          id: '4',
          checked: false,
          text: "文综",
          del: false
        }
      ],
      showArr: [],
      text: '',
      status: 'all'
    }
  }
  componentDidMount() {
    this.switchShowArr(this.state.status)
  }
  inputHandle(e) {
    this.setState({
      text: e.target.value
    })
  }
  keyDownHandle(e) {
    if (e.keyCode === 13) {
      this.addList(e)
    }
  }
  addList (event) {
    let text = event.target.value
    if (!text) return
    let obj = {
      checked: false,
      text,
      id: new Date().getTime()
    }
    let arr = [...this.state.arr, obj]
    let showArr = this.state.status === 'all' || this.state.status === 'unfinished' ? [...this.state.showArr, obj] : this.state.showArr
    this.setState({
      arr,
      text: '',
      showArr
    })
  }
  delList (id) {
    let arr = this.state.arr, index = this.getArrIndex(id)
    arr[index].del = true
    this.setState(
      {
        arr
      }, () => {
        this.switchShowArr(this.state.status)
      }
    )
  }
  recoverItem(id) {
    let arr = this.state.arr, index = this.getArrIndex(id)
    arr[index].del = false
    this.setState(
      {
        arr
      }, () => {
        this.switchShowArr(this.state.status)
      }
    )
  }
  checkBox(id) {
    let arr = this.state.arr, index = this.getArrIndex(id)
    arr[index].checked = !arr[index].checked
    this.setState({
      arr
    })
  }
  getArrIndex(id) {
      let index = -1
      this.state.arr.forEach((item, v) => {
        if (item.id === id) {
          index = v
        }
      })
      return index
  }
  switchShowArr(type) {
    let showArr = []
    if (type === 'all') {
      showArr = this.state.arr.filter((item) => !item.del)
    } else if (type === 'finished') {
      showArr = this.state.arr.filter((item) => item.checked && !item.del)
    } else if (type === 'unfinished') {
      showArr = this.state.arr.filter((item) => !item.checked && !item.del)
    } else if (type === 'del') {
      showArr = this.state.arr.filter((item) => item.del)
    }
    this.setState({
      status: type,
      showArr
    })
  }
  render() {
    console.log("父组件的render")
    return (
      <div>
        <input value={this.state.text} onChange={(e) => { this.inputHandle(e) }} onKeyDown={(e) => { this.keyDownHandle(e) }} placeholder="请输入任务" onBlur={(e) => { this.addList(e) }} />
        <div>
          {this.state.showArr.length > 0 ? this.state.showArr.map((item, index) => <ListItem key={item.id} index={item.id} pdata={item} delList={(n) => () => { this.delList(n) }} recoverItem={(n) => () => { this.recoverItem(n)}} checkBox={(n) => () => { this.checkBox(n) }}></ListItem>)
        : (<span>暂无数据...</span>)}
        </div>
        <button onClick={() => { this.switchShowArr('all')}}>all</button>
        <button onClick={() => { this.switchShowArr('finished') }}>finished</button>
        <button onClick={() => { this.switchShowArr('unfinished') }}>unfinished</button>
        <button onClick={() => { this.switchShowArr('del') }}>del</button>
      </div>
    );
  }
}

export default App;
