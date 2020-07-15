import React, {useState} from 'react'

function HookCount() {
    const [count, setCount] = useState(0)
    console.log(useState('hello'))
    return (
        <div>
            <button onClick={() => { setCount(count-1)}}>hook-</button>
            {count}
            <button onClick={() => { setCount(count+1)}}>hook+</button>
        </div>
    )
}

export default HookCount