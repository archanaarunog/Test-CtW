const express = require("express")
const app = express()
app.get("/", function(req,res)
{
    res.send("")
})

app.get("/", function(req,res)
{
    res.sendFile(__dirname + "/" + "index.html");
    res.send("This is the second edit")
})



app.listen(process.env.PORT || 5000)
