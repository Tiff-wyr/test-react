import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function HookCount() {
    const [count, setCount] = useState(0)
    console.log(useState('hello'))
    return (
        <div>
            <Link to="/parent/a" >toparentA</Link>
            <button onClick={() => { setCount(count-1)}}>hook-</button>
            {count}
            <button onClick={() => { setCount(count+1)}}>hook+</button>
        </div>
    )
}

export default HookCount