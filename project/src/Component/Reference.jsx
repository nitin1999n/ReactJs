import { useRef } from "react"
const Reference=()=>{
    let demoRef=useRef()
    console.log(demoRef);

    let chgColor=()=>{
        demoRef.current.style.backgroundColor="red"
    }
    return(
        <div>
            <h1 ref={demoRef}>Reference</h1>
            <button onClick={chgColor}>Click</button>
        </div>
    )
}
export default Reference