const Obj=(Props)=>{
    console.log(Props);  //[{}{}{}]
    return(
        <div>
            <h1>Developer Name:{Props.data[0].Fname}</h1>
            <h1>He is a Front end Dev</h1>
            <h1>known as {Props.data[0].skills[0]} and {Props.data[0].skills[0]}5</h1>
        </div>
    )
}
export default Obj