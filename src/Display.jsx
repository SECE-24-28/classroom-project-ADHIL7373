function Display(datas){
  

    const {name, val1, arr,obj, receive}=datas;
      const myData="im a child"
    return (
        <>
        <h1>Hello {name} {val1}</h1>
        <h2>Array Datas</h2>
        <ul>{
            arr.map((d,ind)=>{
                return(
                    <li key={ind}>{d}</li>
                )
            })}
           
        </ul>
        <h2>{obj.name} {obj.gender}</h2>
        <h2>i am from display</h2>
        <button onClick={() => {receive(myData) }}>click me!!</button>
        
        </>
    )
}


export default Display
