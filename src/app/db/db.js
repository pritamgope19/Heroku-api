
// const mongoose = require('mongoose')

// const url = `mongodb+srv://m001-student:m001-mongodb-basics@@sandbox.pxsgh.mongodb.net/sample_training?retryWrites=true&w=majority`;

// const connectionParams={
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true 
// }
// mongoose.connect(url,connectionParams)
//     .then( () => {
//         console.log('Connected to database ')
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. \n${err}`);
//     })


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
    }).count().then((val)=>{
    console.log(val);
    }).catch((e)=>{
        console.log("Error: ",e);
    });


    client.close();
})