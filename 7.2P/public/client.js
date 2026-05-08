const socket = io();

function joinRoom() {
    const username = document.getElementById('username').value;
    socket.emit('joinRoom', username);
}

function sendMessage() {
    const username = document.getElementById('username').value;
    const message = document.getElementById('messageInput').value;

    socket.emit('chatMessage', {
        username,
        message
    });

    document.getElementById('messageInput').value = '';
}

function sendTopic() {
    const topic = document.getElementById('topicInput').value;

    socket.emit('studyTopic', topic);

    document.getElementById('topicInput').value = '';
}

socket.on('message', (msg) => {
    const messageBox = document.getElementById('messages');

    const p = document.createElement('p');
    p.textContent = msg;

    messageBox.appendChild(p);
});