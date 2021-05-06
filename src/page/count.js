import React from "react";
import { connect } from "react-redux"
import { addCount, minusCount } from '../action'
import MyContext from "../components/context/MyContext";

class Count extends React.Component {
  constructor(props) {
    console.log("初始化count");
    super(props);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("count 的 willReceived", nextProps === this.props);
  }
  componentDidMount() {
    console.log("context", this.context);
  }
  UNSAFE_componentWillUpdate() {
    console.log("count组件将要更新");
  }
  componentDidUpdate() {
    console.log("count update end");
  }
    addListener = () => {
        const { bus } = this.context;
        bus.addListener(() => {
            console.log(this.props.num);
        })
  };
  render() {
    console.log("count组件的render");
    const { num, onIncrement, onDecrement } = this.props;
    const { bus } = this.context;
    return (
      <div>
        <div onClick={this.addListener}>name: {bus.name}</div>
        <button onClick={onDecrement}>-</button>
        <span>{num}</span>
        <button onClick={onIncrement}>+</button>
      </div>
    );
  }
}

Count.contextType = MyContext;

const mapStateToProps = state => {
    return {
        num: state.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => {
            dispatch(addCount())
        },
        onDecrement: () => {
            dispatch(minusCount())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Count)