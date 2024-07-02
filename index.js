var express = require("express");
var server = express();
var router = express.Router({});
var name = "Damir";
server.get("/Health", function (req, res) {
    return res.send({ name: name });
});
server.listen(8000, function () {
    console.log("working");
});
