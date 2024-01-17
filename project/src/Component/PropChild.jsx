const PropChild=(props)=>{
    console.log(props);
    return(
        <div>
            <h1>{props.data}</h1>
            <h1>{props.children}</h1>
        </div>
    )
}
export default PropChild