var socket = io();

//Cuando la persona se conecta al servidor
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//cuando la persona se desconecta, evento emitido
socket.on('disconnect', function() {
    console.log('Se perdió conexión con el servidor');
});

//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola mundo'
}, function(respuesta) {
    console.log('Respuesta server:',
        respuesta);
});

//Recibir información desde el servidor
socket.on('enviarMensaje', function(respuesta) {
    console.log(`Info del servidor:`, respuesta);
});