const express = require("express")
const app = express()

var path = require('path');     
var file = path.join(__dirname, 'file.pdf');    
res.download(file, function (err) {
       if (err) {
           console.log("Error");
           console.log(err);
       } else {
           console.log("Success");
       }    
});

app.get("/", function(req,res)
{
    res.sendFile(__dirname + "/" + "index.html");
    //res.send("This is the second edit")
})



app.listen(process.env.PORT || 5000)
