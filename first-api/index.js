const express = require('express');
const app = express();
const server = require('http').createServer(app);
const userRouter = require('./routes/userManager');
const port = 5000;
const parser = require('body-parser');
const cors = require('cors');

const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('send', (data) => {
        console.log('a message recieved');
        console.log(data);

        socket.emit('rec_msg', data);
    })
})

app.use(cors());
app.use(parser.json());

app.use('/user', userRouter);

app.get('/add', (req, res) => {
    console.log('request received!');
    res.send('here is the response!');
})

server.listen(port, () => {
    console.log("Server started at 5000!!");
});