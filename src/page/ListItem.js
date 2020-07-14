import React, { Component, PureComponent } from "react";
import "../static/css/listItem.css";

class ListItem extends PureComponent {
  constructor(props) {
    super(props);
    console.log("ListItem组件的初始化", props.text);
    this.state = {
      edit: false,
      text: props.text,
    };
    this.inputRef = React.createRef();
  }
  editItem(checked) {
    if (checked) {
      alert("已经完成的不能修改啊");
      return;
    }
    this.setState(
      {
        edit: true,
      },
      () => {
        this.inputRef.current.focus();
      }
    );
  }
  editItemText(e) {
    this.props.editItemText(this.props.index, this.state.text);
    this.setState({
      edit: false,
    });
  }
  handleKeyEnter(e) {
    if (e.keyCode === 13) {
      this.editItemText(e);
    }
  }
  handleInputChange(e) {
    this.setState({
      text: e.target.value,
    });
  }
//   shouldComponentUpdate(oldProps, state) {
//     console.log(state);
//     if (
//       oldProps.pdata.text !== this.props.pdata.text ||
//       state.edit !== this.state.edit ||
//       state.text !== this.state.text
//     ) {
//       return true;
//     }
//     return false;
//   }
  componentDidUpdate(oldProps) {
      console.log("item的update")
    if (oldProps.text !== this.props.text) {
      this.setState({
        text: this.props.text,
      });
    }
  }
  render() {
    console.log("item的render");
    const { del,checked, text, checkBox, delList, index, recoverItem } = this.props;
    return (
      <div>
        <input
          type="checkbox"
          onChange={() => {
            checkBox(index);
          }}
          defaultChecked={checked}
        ></input>
        <span
          style={{ display: !this.state.edit ? "inline-block" : "none" }}
          onClick={() => {
            this.editItem(checked);
          }}
          className={checked ? "text finish" : "text"}
        >
          {text}
        </span>
        <input
          onBlur={(e) => {
            this.editItemText(e);
          }}
          onKeyDown={(e) => {
            this.handleKeyEnter(e);
          }}
          ref={this.inputRef}
          onChange={(e) => {
            this.handleInputChange(e);
          }}
          style={{ display: this.state.edit ? "inline-block" : "none" }}
          type="text"
          value={this.state.text}
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
