import io from 'socket.io-client';

const getSocket =  io('localhost:3000');

export { getSocket };
