var users = require('./users')
var products = require('./products')
var posts = require('./posts')

module.exports = [].concat(users, products, posts)
