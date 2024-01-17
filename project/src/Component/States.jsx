import { useState } from "react"

const State=()=>{
    let [data,setdata]=useState("hi")
    let x=()=>{ setdata("hello")}
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={x}>Greet</button>
        </div>
    )
}
export default State