const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(_dirname + '/dist'));

app.length('/*', (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

server.listen(port, ()=> console.log('Running...'));
