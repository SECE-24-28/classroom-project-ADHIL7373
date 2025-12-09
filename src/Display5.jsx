import { useState } from "react"
 

const Display5=()=>{
    const[student,setStudent]=useState({
        name:"nandhini",
        gender:"female",
        mobile:7373537820
    })
     
    function updateName(){
        setStudent( {name:"ADHIL", gender:"male", mobile:9789181440})
           
         
    }
    return(
 <>
     
 <h1>name:{student.name}</h1>
 <h1>gender:{student.gender}</h1>
 <h1>mobile:{student.mobile}</h1>
 <button onClick={updateName}>change name</button>
 </>
    )
       
     
}
export default Display5;

