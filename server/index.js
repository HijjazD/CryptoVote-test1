 const express = require('express')
 const app = express()

 app.use("/", (req, res) => {
    res.send("hello world!!")
 })

 app.listen(5000, 
    console.log("server on port 5000")
 )







