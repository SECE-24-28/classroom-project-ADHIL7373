import { useParams } from "react-router-dom";

function Users(){
    const data=useParams();
    return(
        <h1>This is Users page.{data.id}</h1>
    )
}
export default Users;