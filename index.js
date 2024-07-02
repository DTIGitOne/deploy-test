import express from "express";

const server = express();
const router = express.Router({});

server.get("/Health", (req , res) => {
    return res.send("Working")
});

server.listen(8000, () => {
    console.log("working")
});