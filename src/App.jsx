import "./App.css";
import ListItem from "./page/ListItem";
import Count from "./page/Count";
import HookCount from "./page/HookCount";
// import List from "./page/List";
import store from "./store";
console.log(store.getState());
const map = {
  a: 1
}

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("初始化app", _.get(map, "a"));
    this.state = {
      showArr: [
        {
          id: "1",
          checked: true,
          text: "语文",
          del: false,
        },
        {
          id: "2",
          checked: false,
          text: "数学",
          del: false,
        },
        {
          id: "3",
          checked: false,
          text: "英语",
          del: false,
        },
        {
          id: "4",
          checked: false,
          text: "文综",
          del: false,
        },
      ],
      text: "",
      status: "all",
    };
  }
  // componentDidMount() {
  //   this.switchShowArr(this.state.status);
  // }
  inputHandle(e) {
    this.setState({
      text: e.target.value,
    });
  }
  keyDownHandle(e) {
    if (e.keyCode === 13) {
      this.addList(e);
    }
  }
  addList(event) {
    let text = event.target.value;
    if (!text) return;
    let obj = {
      checked: false,
      text,
      id: new Date().getTime(),
    };
    let showArr = [...this.state.showArr, obj];
    this.setState({
      text: "",
      showArr,
    });
  }
  delList(id) {
    let showArr = this.state.showArr,
      index = this.getArrIndex(id);
    showArr[index].del = true;
    this.setState({
      showArr,
    });
  }
  recoverItem(id) {
    let showArr = this.state.showArr,
      index = this.getArrIndex(id);
    showArr[index].del = false;
    this.setState({
      showArr,
    });
  }
  checkBox(id) {
    let showArr = this.state.showArr,
      index = this.getArrIndex(id);
    showArr[index].checked = !showArr[index].checked;
    this.setState({
      showArr,
    });
  }
  getArrIndex(id) {
    // fix me
    return this.state.showArr.findIndex((item, v) => {
      return item.id === id;
    });
  }
  switchShowArr(type) {
    this.setState({
      status: type,
    });
  }
  filterShowArr(type) {
    switch (type) {
      case "finished":
        return this.state.showArr.filter((item) => item.checked && !item.del);
      case "unfinished":
        return this.state.showArr.filter((item) => !item.checked && !item.del);
      case "del":
        return this.state.showArr.filter((item) => item.del);
      case "all":
      default:
        return this.state.showArr.filter((item) => !item.del);
    }
  }
  editItemText(n, text) {
    let showArr = this.state.showArr,
      index = this.getArrIndex(n);
    showArr[index].text = text;
    this.setState({
      showArr,
    });
  }
  render() {
    console.log("父组件的render");
    console.log("app", this.props);
    return (
      <div className="app">
        <HookCount />
        <p>使用redux</p>
        <Count />
        {/* <List /> */}
        <p>没用redux</p>
        <input
          style={{ width: "190px" }}
          value={this.state.text}
          onChange={(e) => {
            this.inputHandle(e);
          }}
          onKeyDown={(e) => {
            this.keyDownHandle(e);
          }}
          placeholder="请输入任务"
          onBlur={(e) => {
            this.addList(e);
          }}
        />
        <div>
          {this.filterShowArr(this.state.status).length > 0 ? (
            this.filterShowArr(this.state.status).map((item, index) => (
              <ListItem
                checked={item.checked}
                del={item.del}
                text={item.text}
                key={item.id}
                index={item.id}
                delList={(n) => {
                  this.delList(n);
                }}
                recoverItem={(n) => {
                  this.recoverItem(n);
                }}
                editItemText={(n, v) => {
                  this.editItemText(n, v);
                }}
                checkBox={(n) => {
                  this.checkBox(n);
                }}
              ></ListItem>
            ))
          ) : (
            <span>暂无数据...</span>
          )}
        </div>
        <button
          onClick={() => {
            this.switchShowArr("all");
          }}
        >
          all
        </button>
        <button
          onClick={() => {
            this.switchShowArr("finished");
          }}
        >
          finished
        </button>
        <button
          onClick={() => {
            this.switchShowArr("unfinished");
          }}
        >
          unfinished
        </button>
        <button
          onClick={() => {
            this.switchShowArr("del");
          }}
        >
          del
        </button>
      </div>
    );
  }
}

export default App;
