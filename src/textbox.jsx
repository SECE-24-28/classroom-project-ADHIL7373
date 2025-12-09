import { useState } from "react";

const Display9=()=>{
    
     const[student,setStudent]= useState({
        username:"",
        email:""
     })
     const change=(e)=>{

setStudent((prev)=>{
return ({...prev,
    [e.target.name]:e.target.value
})
})
}
    return(
        <>
        <h1> hi i am from disp 9 {student.username} {student.email}</h1>
        <input onChange={change} name="username" value={student.username}></input>
        </>
    )
}
export default Display9;