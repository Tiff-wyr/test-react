import { connect } from "react-redux"
import { addCount, minusCount } from '../action'

class Count extends React.Component {
    constructor(props) {
        console.log("初始化count")
        super(props)
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('count 的 willReceived', nextProps === this.props)
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
        const { num, onIncrement, onDecrement } = this.props;
        return (
          <div>
            <button onClick={onDecrement}>-</button>
            <span>{num}</span>
            <button onClick={onIncrement}>+</button>
          </div>
        );
    }
}

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