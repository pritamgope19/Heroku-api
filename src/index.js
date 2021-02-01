const express = require('express');
const client = require('./app/db/db');
const user = {
    name: "Pritam Gope",
    status: "Online"
}

const app = express();
const port = process.env.PORT || 3000;

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.pxsgh.mongodb.net/sample_training?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    if (err) {
        return console.log('Unable to connect to Database');
    }

    console.log("Connected Successfully...");


    const collection = client.db("sample_training").collection("posts");
    // perform actions on the collection object
    let val = collection.find({
        title: "Gettysburg Address"
    }).count().then((val) => {
        console.log(val);
    }).catch((e) => {
        console.log("Error: ", e);
    });
    app.use(express.json());

    app.get('/users', (req, res) => {

        // const user = new User(req.body);
        client.client.connect
        res.status(200).send(val);
    })


    client.close();
})





app.listen(port, () => {
    console.log("Server is UP! at port: ", port);
})