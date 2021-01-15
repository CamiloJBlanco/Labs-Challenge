const express = require('express');//framework
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');
const server = express();//lo uso para crear un servidor
const redis = require('redis');
const redisJson = require('redis-store-json');
const redisStoreJson = require('redis-store-json');

const REDIS_PORT = process.env.PORT || 6379

const client = redis.createClient(REDIS_PORT);
client.on('connect', () => {
    console.log('Redis server connection successful');
})

redisStoreJson.use(client);

server.name = 'API';
server.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));
server.use(bodyParser.json({limit: '50mb'}));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', '*'); // Indica que permite el ingreso de todos los metodos
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Solo recibe peticiones de la URL indicada
  res.header('Access-Control-Allow-Credentials', 'true'); // Setea en true las credenciales de las peticiones
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

server.use('/', routes);

server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;