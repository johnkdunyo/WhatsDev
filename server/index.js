const express = require('express');
const cors = require('cors');
require('dotenv').config();
const http = require('http');

// initialise expresss
const app = express();


// we create ab httpserver
const httpServer =  http.createServer(app);
const { Server } = require('socket.io');

// new instace of socket.io with the http server
const io = new Server(httpServer);

io.on('connection', (socket)=>{
    console.log('user connected')
})
app.use(cors());
app.use(express.json());

//defautl route
app.get('/', (req, res) => {
    res.json({message: 'Welcome dude'})
});




// handling all errors
// default to 500 if not able to catch
app.use((err, req, res, next) => {
    console.log(err);
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
      message: err.message,
    });
});

const PORT = process.env.PORT || 3005;
// const PORT = 8080;
const host = '0.0.0.0';


app.listen(PORT, host, ()=> {
    console.log(`App started and running succesfully on PORT ${PORT}`)
})
