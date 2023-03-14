const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.set("view engine", "ejs")

app.get('/home',(req,res)=>{
    res.render("home")
})

io.on('connection', (socket)=>{
    console.log('server connected' + socket.id);
})


server.listen(3002,()=>{
    console.log('server running');
})