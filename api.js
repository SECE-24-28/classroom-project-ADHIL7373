async function loaddata() {
    try{
    var res = await fetch("https://jsonplaceholder.typicode.com/users");
    var data = await res.json()
    console.log(data);
    }
 
catch (a){
    console.log("failed");
}
}
loaddata();

//create data

async function createData() {
    try{
        var res = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "adhil",
                gender: "Male"
            })
        });
        var data = await res.json();
        console.log(data);
    }
    catch (a){
        console.log("failed to create");
    }
}

createData();

//update data
async function updateData() {
    try{
        var res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "adhil updated",
                gender: "Male"
            })
        });             

        var data = await res.json();
        console.log(data);
    }   
    catch (a){
        console.log("failed to update");
    }
}

//delete data
async function deleteData() {
    try{
        var res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
            method: "DELETE"
        });
        console.log("data deleted");
    }
    catch (a){
        console.log("failed to delete");
    }
}
deleteData();
