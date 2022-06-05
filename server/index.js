const express = require('express');
const cors = require('cors');
require('dotenv').config();
const http = require('http');

// initialise expresss
const app = express();

// we create ab httpserver
const httpServer =  http.createServer(app);
const { Server } = require('socket.io');

app.use(cors());
app.use(express.json());

//defautl route
app.get('/', (req, res) => {
    res.json({message: 'Welcome dude'})
});


// new instace of socket.io with the http server
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",  //client
        methods: ['POST', "GET"]
    }
});
io.on('connection', (socket)=>{
    console.log('user connected: ', socket.id)
    const uid = socket.handshake.query.uid;
    console.log('user id: ', uid);
    socket.join(uid)

    socket.on('send_message', (data)=>{
        console.log(data)
    })

    // socket.on('send-message', ({ recipients, text }) => {
    //     recipients.forEach(recipient => {
    //     const newRecipients = recipients.filter(r => r !== recipient)
    //     newRecipients.push(id)
    //     socket.broadcast.to(recipient).emit('receive-message', {
    //         recipients: newRecipients, sender: id, text
    //     })
    //     })
    // })
})








const PORT = process.env.PORT || 3005;
// const PORT = 8080;
const host = '0.0.0.0';


httpServer.listen(PORT, host, ()=> {
    console.log(`App started and running succesfully on PORT ${PORT}`)
})
