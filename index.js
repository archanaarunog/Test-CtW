const express = require("express")
const app = express()

var path = require('path')
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", function(req,res)
{
    res.sendFile(__dirname + "/" + "index.html");
    //res.sendFile(__dirname + "/" + "main.html");
    //res.send("This is the second edit")
})

app.listen(process.env.PORT || 5000)
