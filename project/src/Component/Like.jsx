import { useState } from "react"

    const Like =()=>{
        let[data,setdata]=useState(0)
        let heart=()=>{
            setdata(data+1)
        }
        // let[data1,setdata1]=useState(0)
        // let bandar=()=>{
        //     setdata1(data1+1)
        // }

    return(
        <div>
            {/* <h1 onClick={}></h1> */}
            <h1 onClick={heart}>😍{data}</h1>
            {/* <h1 onClick={bandar}>🦧{data}</h1> */}
        </div>
    )
}
export default Like