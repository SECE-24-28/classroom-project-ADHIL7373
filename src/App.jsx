import { useState } from "react";
import Display from "./Display"

function App(){
  const[data,setdata]=useState();
  var name="dharaneesh";
  var val1=10;
  var arr=[1,2,3,4,5];
  const person={name:"dharan", gender:"male"};
  const recieve=(d)=>{
    console.log("got it",d);
    setdata(d);
  }
  return(
    <>
    <h1>welcome</h1>
    <h2>data from child: {data}</h2>
    <Display name={name} val1={val1} arr={arr} obj={person} receive={recieve} />
    </>
  )
}

export default App