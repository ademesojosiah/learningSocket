const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.set("view engine", "ejs")

app.get('/home',(req,res)=>{
    res.render("home")
})


server.listen(3002,()=>{
    console.log('server running');
})