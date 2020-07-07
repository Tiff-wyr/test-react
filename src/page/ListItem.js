import React, { Component } from 'react'
import '../static/css/listItem.css'

class ListItem extends Component {
    constructor(props) {
        console.log('ListItem组件的初始化')
        super(props);
    }
    render() {
        const { pdata, checkBox, delList, index, recoverItem} = this.props
        return (<div>
            <input type="checkbox" onChange={checkBox(index)} defaultChecked={pdata.checked}></input>
            <span className={pdata.checked ? 'finish' : ''}>{pdata.text}</span>
            {pdata.del ? (<button onClick={recoverItem(index)}>recover</button>): (<button onClick = { delList(index) }>del</button>)}
        </div>);
    }
}
export default ListItem;