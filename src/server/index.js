import { Server } from 'hapi';
import inert from 'inert';
import ReactRoutes from './modules/react/ReactRoutes';
import StaticRoutes from './modules/static/StaticRoutes';

var hostname = process.env.HOSTNAME || 'localhost';

/**
 * Start Hapi server on port 8000.
 */
const server = new Server();

server.connection({host: hostname, port: process.env.PORT || 8000});

server.register([
  inert, StaticRoutes, ReactRoutes
], function (err) {
	if (err) {
		throw err;
	}

	server.start(function () {
		console.info(`Server is listening @ ${server.info.uri.toLowerCase()}`);
	});
});
