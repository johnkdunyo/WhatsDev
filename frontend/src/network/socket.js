import io from "socket.io-client";

const SERVER = "http://127.0.0.1:3005";
const user = localStorage.getItem('User');
const userID = JSON.parse(user).uid;
const socket = io.connect(SERVER, { query: { uid: userID } });
console.log(socket)

export const sendMessage = (mesage) => {
    socket.emit("send_message", {mesage: mesage})
}