import { useRef,useState } from "react"

const Display3=()=>{
    const [name,setName]=useState("")
    const inputdata =useRef();
    const viewdata=()=>{
        console.log("the data is....: ",inputdata.current?.value);
        setName(inputdata.current.value)
    }
   
    return(
        <>
        <h1>im from Display2 {name}</h1>
        <input type="text" ref={inputdata}></input>
        <button onClick={()=>(viewdata())}>click me!!</button>
        </>
    );
};
export default Display3;
