import { useState } from "react"

const NewButton=()=>{
    let [data,setdata]=useState(0)
    let increment=()=>{
        data=data+1
        setdata(data)
    }
    let decrement=()=>{
        data=data-1
        setdata(data)
    }
    let reset=()=>{
        data=0
        setdata(data)
    }
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={increment}>Increment</button> <br />
            <button onClick={decrement}>Decrement</button> <br />
            <button onClick={reset}>Reset</button>
        </div>
    )
}
export default NewButton