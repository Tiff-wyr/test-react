import React, { Component } from "react";
import "../static/css/listItem.css";

class ListItem extends Component {
  constructor(props) {
    super(props);
    console.log("ListItem组件的初始化", props.pdata.text);
    this.state = {
      edit: false,
      text: props.pdata.text,
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
  componentDidUpdate(oldProps) {
    if (oldProps.pdata.text !== this.props.pdata.text) {
      this.setState({
        text: this.props.pdata.text,
      });
    }
  }
  render() {
    const { pdata, checkBox, delList, index, recoverItem } = this.props;
    return (
      <div>
        <input
          type="checkbox"
          onChange={() => {checkBox(index);}}
          defaultChecked={pdata.checked}
        ></input>
        <span
          style={{ display: !this.state.edit ? "inline-block" : "none" }}
          onClick={() => {
            this.editItem(pdata.checked);
          }}
          className={pdata.checked ? "text finish" : "text"}
        >
          {pdata.text}
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
        {pdata.del ? (
            // fixme
          <button onClick={() => {recoverItem(index)}}>recover</button>
        ) : (
            // fixme 
          <button onClick={() => {delList(index)}}>del</button>
        )}
      </div>
    );
  }
}
export default ListItem;
