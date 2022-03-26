const express = require("express")
const app = express()
app.get("/", function(req,res)
{
    res.send("hopefull this thing is deployed properly!")
})

app.listen(process.env.PORT || 5000)
