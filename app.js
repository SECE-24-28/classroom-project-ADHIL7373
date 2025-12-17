const express = require('express')
 const app = express()
 const bodyParser = require('body-parser')
 const exhbs = require('express-handlebars')
 //let message = 'Tony Stark'
 let message = "Test"


app.engine('hbs', exhbs.engine({
    layoutsDir: 'view_folder',
    defaultLayout: false,
    extname: 'hbs'
}))

app.set('view engine', 'hbs')
app.set('views', 'view_folder')

app.use(bodyParser.urlencoded({ extended: true }))


// app.get('/', (req, res) => {
     
//     res.render('main',{message})})



const dbo = require('./db')

app.get('/', async (req, res) => {
    let db = await dbo.getDatabase()
    const collection = db.collection('books')
    const cursor = collection.find({})
    let myData = await cursor.toArray()
    switch(req.query.status){
        case '1': message = "Book Added Successfully"
        break;
        default: break;
    }
    res.render('main',{message, myData})
})

app.post('/store_book',async (req, res) => {
    let database = await dbo.getDatabase()
    const collection = database.collection('books')
    let bookdata = {title: req.body.title1, author: req.body.author1}
    await collection.insertOne(bookdata)
    return res.redirect('/?status=1')
})

app.get('/delete/:id', async (req, res) => {
    const database = await dbo.getDatabase()
    const collection = database.collection('books')
    const { ObjectId } = require('mongodb')
    await collection.deleteOne({ _id: new ObjectId(req.params.id) })
     res.redirect('/?status=2')
})

app.get('/edit/:id', async (req, res) => {
    const database = await dbo.getDatabase()
    const collection = database.collection('books')
    const { ObjectId } = require('mongodb')
    let book = await collection.findOne({ _id: new ObjectId(req.params.id) })
    res.render('edit', { book })
})

app.post('/update/:id', async (req, res) => {
    const database = await dbo.getDatabase()
    const collection = database.collection('books')
    const { ObjectId } = require('mongodb')
    await collection.updateOne(
        { _id: new ObjectId(req.params.id) },
        { $set: { title: req.body.title1, author: req.body.author1 } }
    )
    res.redirect('/?status=3')
})

app.listen(8000, () => {
    console.log('Server is running on port 8000')
})