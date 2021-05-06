import React, { PureComponent } from 'react'

class MyButton extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { onClick, forwardedRef } = this.props;
   return (
     <>
       <input ref={forwardedRef} type="text" />
       <button onClick={onClick}>获取input 值</button>
     </>
   );
 }
}

export default React.forwardRef((props, ref) => (
  <MyButton {...props} forwardedRef={ref} />
));