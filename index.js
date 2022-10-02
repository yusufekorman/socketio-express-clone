const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/index.html');
});

//Whenever someone connects this gets executed
io.on('connection', function (socket) {
    console.log('A user connected');
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});