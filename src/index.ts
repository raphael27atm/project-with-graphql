import * as htpp from 'http';
import app from './app';

const server = htpp.createServer(app);

server.listen(3000);
server.on('listening', () => console.log('Listening on port 3000...'));
