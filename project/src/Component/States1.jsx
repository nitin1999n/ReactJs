const States1=()=>{
    let greet="Hi"

    let changeData=()=>{
        greet="Hello"
        console.log(greet);
        let headingTags= document.querySelectorAll("h1")
        headingTags.forEach((x)=>{
            x.innerText=greet
        })
    }
    return(
        <div>
            <h1>{greet}</h1>
            <button onClick={changeData}>click</button>
        </div>
    )
}
export default States1