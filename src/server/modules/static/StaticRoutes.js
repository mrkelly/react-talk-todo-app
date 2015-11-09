exports.register = (server, options, next) => {
  server.route({
    method:  'GET',
    path:    '/{params*}',
    handler: {
      file: (request) => 'build' + request.path
    }
  });

  next();
};

exports.register.attributes = {
  name: 'static-routes',
  version: '0.0.1'
};
