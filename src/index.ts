import './pre-start';
import { Port } from './contants';
import server from './server';

const SERVER_START_MSG = 'Express server started on port: ' + Port.toString();

server.listen(Port, () => console.log(SERVER_START_MSG));
