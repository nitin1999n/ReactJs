import userContent from "./userData.json"
import style from "./style.module.css"

const FetchData=()=>{
    return(
        <div id={style.profilePage}>
            {userContent.map((element)=>{
//-------------------------------------------------------------------------------------------------
            // let AddData=()=>{
                // alert(`friend Request sent to ${element.login}`)
                // const x = document.getElementById(element.id);
                // if(x.innerText=="ADD"){
                //     alert(`Friend Request sent to ${element.login}`)
                //     x.innerText="Cancel"
                // }
                // else{
                //     alert(`Friend Request cancel to ${element.login}`)
                //     x.innerText="ADD"
                // }
//-------------------------------------------------------------------------------------------------
                let sendRequest=(e)=>{
                    alert(`Friend Request sent to ${element.login}`)
                    e.target.innerText="Cancel"
                }

                let messageSent=(a)=>{
                    let x=prompt("Enter message")
                    console.log(x,element.login);
                }
//------------------------------------------------------------------------------------------------
                return (
                    <div>
                        <h2>ITC</h2>
                        <img src={element.avatar_url} alt=""/>
                        <h3>{element.login}</h3>
                        <h3>Id: {element.id}</h3>
                        <button onClick={sendRequest} id={element.id}>ADD</button>
                        <button onClick={messageSent}>MESSAGE</button>
                    </div>
            )}
            )}
        </div>
    )
}
export default FetchData