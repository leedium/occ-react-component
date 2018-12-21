const fs = require('fs');
const path = require('path')
const http = require('http');
const httpProxy = require('http-proxy');

const packageJSON = require('../package');

const options = {
  target:{
    host: 'localhost',
    changeOrigin: true,
    port: 9000
  },
  secure: true,
  ssl: {
    key: fs.readFileSync(path.resolve(__dirname,'./client-key.pem'), 'utf8'),
    cert: fs.readFileSync(path.resolve(__dirname,'./client-cert.pem'), 'utf8')
  }
};

const proxy = httpProxy.createProxyServer(options);

const httpServer = http.createServer((req,res) => {
  proxy.web(req,res);
});

httpServer.listen(9001);




