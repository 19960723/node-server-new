import './pre-start';
import { Port } from './contants';
import server from './server';
import logger from 'jet-logger';

const SERVER_START_MSG = 'Express server started on port: ' + Port.toString();

server.listen(Port, () => logger.info(SERVER_START_MSG));
