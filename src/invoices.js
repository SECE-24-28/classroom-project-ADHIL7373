import { Link } from "react-router-dom"
import getInvoices from "./data"

function Invoices(){
    let myDatas=getInvoices()
    return (
        <>
        <h1>Invoices Page</h1>
        <ul>
            {
                myDatas.map((data)=>{
                    return <li><Link to={`/invoice/${data.number}`} key={data.number}>{data.name}</Link></li>
                })
            }
        </ul>
        </>
    )
}
export default Invoices