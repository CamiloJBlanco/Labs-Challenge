const server = require("express").Router();
const fetch = require("node-fetch");
const redis = require('redis');
const redisJson = require('redis-store-json');

const REDIS_PORT = process.env.PORT || 6379

const client = redis.createClient(REDIS_PORT);

// Function
async function getProducts(req, res) {
    try {
        console.log('Fetching data...');
        const { q } = req.query;

        const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=` + q)
        const data = await response.json();
        const products = data.results.map(e => {
            return {
                title: e.title,
                price: e.price,
                money: e.currency_id,
                image: e.thumbnail.replace("I.jpg", "W.webp"),
                stock: e.available_quantity,
                link: e.permalink,
                condition: e.condition
            }
        })
        res.status(200).json(products);

        redisJson.set(q, products)
            .then(result => res.send('succefull set products'))
        client.expire(q, 3600);
    } catch (err) {
        console.error(err);
        res.status(500)
    }
}

// Cache middleware
function cache(req, res, next) {
    const { q } = req.query;
    client.get(q, (err, products) => {
        if (err) throw err;
        else if (products !== null) {
            res.status(200).send(products)
        } else {
            next();
        }
    })
}

// Endpoint
server.get('/search', cache, getProducts)

module.exports = server;