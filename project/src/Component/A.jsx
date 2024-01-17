import B from "./B";
const A=(Props)=>{
    console.log(Props);  //[{}{}{}]
    return(
        <div>
            <B data1={Props.data}></B>
        </div>
    )
}
export default A