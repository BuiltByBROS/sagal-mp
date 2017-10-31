const config = require("../config/config.json");
const bluebird = require('bluebird');
const redis = require('redis');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

module.exports = redis.createClient(config.redis.port, config.redis.host);
