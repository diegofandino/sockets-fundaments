let { io } = require('../server');

io.on('connection', (client) => {

    console.log('Usuario activo');
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    //Cuando un usuario se desconecta, podemos verlo así:
    client.on('disconnect', () => {
        console.log("El cliente se desconectó de la app");
    });

    //Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        //De esta manera se le envía a todos los ususarios que estan conectados
        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salió bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salió mal'
        //     });
        // }

    });

});