const express = require("express")
const app = express()
app.get("/", function(res,req)
{
    res.send("hopefull this thing is deployed properly!")
})

app.listen(process.env.PORT || 5000)
