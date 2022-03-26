const express = require("express")
const app = express()
app.get("/", function(req,res)
{
    res.send("This is edited over one line of code. Need to figure to get complete set up but i think further improvements can start from here!")
})

app.get("/", function(req,res)
{
    res.send("This is the second edit")
})



app.listen(process.env.PORT || 5000)
