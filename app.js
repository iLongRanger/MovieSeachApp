const express = require("express");
const app = express();
const request = require("request");

var path = __dirname + '/views/';

app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render(path + "search"); 
});


app.get("/results", function (req, res){
    let search = req.query.search;
    let url = "http://www.omdbapi.com/?s=" + search + "&apikey=b6d37227";
    request(url, function (error, response, body){
        if(!error && response.statusCode == 200){
            let data = JSON.parse(body);
            res.render(path + "results", {data: data});
        }
    });
}); 


//server listener 
app.listen(process.env.PORT, process.env.IP, function () { 
    console.log("movie app has started!")
}); 
    
