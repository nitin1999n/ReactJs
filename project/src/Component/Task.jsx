import { useState } from "react"
const Task2=()=>{


let x=[
    {Name:"Nitin",Company:"TCS",Salary:25000},
    {Name:"Janvi",Company:"Info",Salary:25000},
    {Name:"Joyti",Company:"Patanjali",Salary:25000},
    {Name:"Rohit",Company:"Google",Salary:25000},
    {Name:"Sahil",Company:"Amazon",Salary:25000},
    {Name:"Suraj",Company:"Flipkart",Salary:25000},
    {Name:"Shubham",Company:"Mintra",Salary:25000},

]
let [empolyee]=useState(x)

// console.log(empolyee);
return(
    <div>
        <table border="solid black" align="center">
            <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Salary</th>
            </tr>
        {
            empolyee.map((Element)=>{
                return(
                    <tr>
                        <td>{Element.Name}</td>
                        <td>{Element.Company}</td>
                        <td>{Element.Salary}</td>
                    </tr>
                )
            })
        }
        </table>
    </div>
)}
export default Task2