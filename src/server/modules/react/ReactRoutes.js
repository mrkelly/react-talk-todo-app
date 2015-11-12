import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../../../components/App/App';
import fs from 'fs';

let AppFactory = React.createFactory(App);
let cssData = '';

fs.readFile('./build/style.css', 'utf8', function (err, data) {
  if (err) {
    return err;
  }
  cssData = data;
});

exports.register = (server, options, next) => {

  server.ext('onPreResponse', (request, reply) => {
    if (typeof request.response.statusCode !== 'undefined') {
      return reply.continue();
    }

    let output = `
      <!DOCTYPE html>
      <html class="no-js" lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width" />
        </head>
        <style>
          ${cssData}
        </style>
        <body>
          <div id="app">${ReactDOMServer.renderToString(new AppFactory())}</div>
          <script>
            setTimeout(function() {
                var headID = document.getElementsByTagName("head")[0];
                var newScript = document.createElement('script');
                newScript.type = 'text/javascript';
                newScript.src = '/index.js';
                headID.appendChild(newScript);
            }, 200);
          </script>
        </body>
      </html>
    `

    reply(output);
  });

  next();
};

exports.register.attributes = {
  name: 'serve-react-routes',
  version: '0.0.1'
};
