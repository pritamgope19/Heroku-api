const express = require('express');
require('./app/db/db');
const user = {
    name: "Pritam Gope",
    status: "Online"
}

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/users', (req, res) => {

    // const user = new User(req.body);
        res.status(200).send(user);
})

app.listen(port, () => {
    console.log("Server is UP! at port :", port);
})