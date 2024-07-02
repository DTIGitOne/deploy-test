const express = require("express");

const server = express();
const router = express.Router({});

const name : String = "Damir";

server.get("/Health", (req , res) => {
    return res.send({name})
});

server.listen(8000, () => {
    console.log("working")
});