const express = require("express")
const app = express()

var path = require('path')
app.use(express.static(path.join(__dirname, '/code/css')));


app.get("/", function(req,res)
{
    res.sendFile(__dirname + "/" + "code/index.html");
})

app.listen(process.env.PORT || 5000)
