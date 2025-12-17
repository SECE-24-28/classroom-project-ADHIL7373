import { useParams } from "react-router-dom"
function Invoice(){
    const data=useParams()
    return(
        <>
        <h1>Invoice Page</h1>
        <h1>Invoice ID : {data.id}</h1>
        </>
    )
}
export default Invoice