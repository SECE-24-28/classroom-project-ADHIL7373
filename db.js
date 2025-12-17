const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient;
let database;

async function getDatabase() {
    const client = await mongoClient.connect('mongodb://127.0.0.1:27017')
    database  = await client.db('bookdemo1')

    if (!database) 
        console.log("Not Connected")
    return database;
    
}
    module.exports = {getDatabase}
