import { Socket } from 'socket.io';
import { io } from './http';

interface RoomUser {
  socket_id: string;
  username: string;
}

const users: RoomUser[] = []

io.on('connection', (socket) => {

  socket.on('connect_to_chat', (data: RoomUser) => {


    socket.join('chat');

    const userInRoom = users.find(user => user.username === data.username)

    if (userInRoom) {
      userInRoom.socket_id = socket.id
    } else {
      users.push({
        username: data.username,
        socket_id: socket.id,
      })
    }

    socket.on('send_message', (data) => {
      console.log(data)
    });
  })


  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
})

io.on('disconnect', () => {
  console.log("Disconnected");
})
