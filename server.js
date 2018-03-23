var express = require('express');
var client = require('./connection.js');
var hostname = 'localhost';
var port = 9292;

var app = express();

app.route("/suv")
    .get(function (req, res) {
        var query = {
            "sort": [
                {
                    "volume": { "order": "desc" }
                }
            ]
        }
        client.search({
            index : "cars",
            type : "car",
            body : query
        },(err,resp)=>{
            res.send(resp)
        });
    })

app.listen(port, hostname, function () {
    console.log("Listening on port " + port + " ...");
});