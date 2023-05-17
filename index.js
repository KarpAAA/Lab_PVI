let usersAmount = 0;
let availableUsers = [
    {name: "Ivan",age:19},
    {name: "Notoka",age:18},
    {name: "Pavlo",age:18},
    {name: "Vytalyk",age:18}];

let express = require('express');
let app = express();
let server = require('http').createServer(app);
let io = require('socket.io')(server);

server.listen(8080);
app.get('/chat', function (req, res){
    res.sendFile('C:\\Users\\ivank\\OSPanel\\domains\\localhost\\Laba_PVI\\index.html');
});

users = [];
connections = [];
messages = [
    {
        from: "Ivan",
        to: "Notoka",
        message: "Hello, how are you?"
    },
    {
        from: "Ivan",
        to: "All",
        message: "Hello, how are you all?"
    },
]




io.sockets.on('connection', function (socket){
    connections.push(socket);
    socket.emit("gettingUser",availableUsers.at(usersAmount++));

    socket.on('disconnect', function (data){
       connections.splice(connections.indexOf(socket),1);
       usersAmount--;
    });

    socket.emit("getAllChats", availableUsers);

    socket.on('sendMessage',function (data, username, userTo){
        messages.push({
            from: username,
            to: userTo,
            message: data
        });


        io.sockets.emit('addMessage',{msg: data, username: username, userTo: userTo});
    });
    socket.on('sendMessagesBySenderAndReceiver',function (username, userTo){
        let filteredMessages;
        if(userTo === "All"){
            filteredMessages = messages.filter(function(message) {
                return message.to === "All";
            });
        }
        else {
            filteredMessages = messages.filter(function(message) {
                return message.from === username && message.to === userTo
                    || message.from === userTo && message.to === username;
            });
        }

        socket.emit("getMessagesBySenderAndReceiver", filteredMessages);
    });
});
