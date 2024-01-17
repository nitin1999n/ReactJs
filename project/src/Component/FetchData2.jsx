import { Fragment } from "react"
import posts from "./userPost.json"
const FetchData2=()=>{
    return(
        <div>
            {posts.map((element,index)=>{
                return(
                    <Fragment key={index}>
                    <h2>Title{element.id}:{element.title}</h2>
                    </Fragment>
                )
            })}
        </div>
    )
}
export default FetchData2