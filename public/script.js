
// socket io

    $(function () {
        var socket = io();
        var users = [];
        var person = prompt("Please enter your name:", "Harry Potter");
        users += person;
        console.log(users);
        $('form').submit(function () {
        socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
});
        socket.on('chat message', function (msg) {
        $('#messages').append($('<li>').text(users +" "+"says: " + msg));
        console.log("*****************************");
        console.log(users);
    });
    // socket.on('login', function (users) {
    //     $('#messages').append($('<li>').text(users + msg));
    // });
});



