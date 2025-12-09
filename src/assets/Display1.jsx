// function Display1(){

import { useState } from "react";

   
//     var name="demo";
//     console.log("display1 component",{name});
//      function changename(d){
//         var name=d;
//         console.log("inside changename function",{name});

//     }
//     return(
//         <>
//         <h1>Display1 Component</h1>
//         <button onClick={() => {changename("not demo")}}>click here!!</button>
//         </>
//     )
// }
// export default Display1



function Display1(){
   
   const[name,setName]=useState("Hello");
   console.log("display1 component",{name});
    return(
        <>
        <h1>Display1 is here {name}</h1>
        <button onClick={() => {setName("not demo")}}>click here!!</button>
        </>
    )
}
export default Display1
