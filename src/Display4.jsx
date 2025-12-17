import { useEffect, useState } from "react";

const Display4=()=>{
    const[data,setData]=useState(0);
    useEffect(()=>{
        console.log("the data is....: ",{data});
    });
    return(
        <>
        <h1>im from Display4</h1>
        <h1> {data}</h1>
        <button onClick={()=>{setData(data+1)}}>click me!!</button>
        </>
    );
};
export default Display4;