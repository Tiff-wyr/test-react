import React, { Component } from "react";
import "../static/css/listItem.css";

class ListItem extends Component {
  constructor(props) {
    super(props);
    console.log("ListItem组件的初始化", props.text);
    this.state = {
      edit: false,
      // text: props.text,
    };
    this.inputRef = React.createRef();
  }
  editItem(checked) {
    if (checked) {
      alert("已经完成的不能修改啊");
      return;
    }
    this.setState({
      edit: true,
    });
  }
  editItemText(e) {
    this.setState({
      edit: false,
    });
    this.inputRef.current.blur();
  }
  handleKeyEnter(e) {
    if (e.keyCode === 13) {
      this.editItemText(e);
    }
  }
  // static getDerivedStateFromProps(nextProps) {
  //   return null
  // }
  shouldComponentUpdate(nextProps, state) {
    if (
      nextProps.text !== this.props.text ||
      nextProps.checked !== this.props.checked ||
      state.edit !== this.state.edit ||
      state.text !== this.state.text
    ) {
      return true;
    }
    // return false;
    // for (const key in nextProps) {
    //   if (!is(nextProps[key], this.props[key])) {
    //     return true
    //   }
    // }
    return false
  }
  componentDidUpdate(oldProps) {
    console.log("item的update");
    if (oldProps.text !== this.props.text) {
      this.setState({
        text: this.props.text,
      });
    }
  }
  render() {
    console.log("item的render", this.state.text);
    const {
      del,
      checked,
      text,
      checkBox,
      delList,
      index,
      recoverItem,
      editItemText,
    } = this.props;
    return (
      <div>
        <input
          type="checkbox"
          onChange={() => {
            checkBox(index);
          }}
          defaultChecked={checked}
        ></input>
        {/* <span
          style={{ display: !this.state.edit ? "inline-block" : "none" }}
          onClick={() => {
            this.editItem(checked);
          }}
          className={checked ? "text finish" : "text"}
        >
          {text}
        </span> */}
        <input
          className={`text ${checked ? "finish" : ""} ${
            this.state.edit ? "edit" : ""
          }`}
          readOnly={checked}
          onBlur={(e) => {
            this.editItemText(e);
          }}
          onClick={() => {
            this.editItem(checked);
          }}
          onKeyDown={(e) => {
            this.handleKeyEnter(e);
          }}
          ref={this.inputRef}
          onChange={(e) => {
            editItemText(index, e.target.value);
          }}
          type="text"
          value={text}
        ></input>
        {del ? (
          // fixme
          <button
            onClick={() => {
              recoverItem(index);
            }}
          >
            recover
          </button>
        ) : (
          // fixme
          <button
            onClick={() => {
              delList(index);
            }}
          >
            del
          </button>
        )}
      </div>
    );
  }
}
export default ListItem;
