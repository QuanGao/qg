require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/qg_db"
const bodyParser = require('body-parser');
const routes = require("./routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(routes); 

mongoose.Promise = global.Promise;
mongoose
    .connect(MONGODB_URI)
    .then(()=>console.log("connnection to mongodb successful"))
    .catch(err=>console.log(err))

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));
}

app.get("/", (req, res) => {
    res.json("hello world")
})
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"))
})

const port = process.env.PORT || 8000;

app.listen(port, function () {
    console.log(`🌎 ==> Server now on port ${port}!`)
})