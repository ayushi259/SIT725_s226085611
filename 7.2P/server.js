const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('joinRoom', (username) => {
        socket.broadcast.emit('message', `${username} joined the study room`);
    });

    socket.on('chatMessage', (data) => {
        io.emit('message', `${data.username}: ${data.message}`);
    });

    socket.on('studyTopic', (topic) => {
        io.emit('message', `📚 Current Topic: ${topic}`);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});