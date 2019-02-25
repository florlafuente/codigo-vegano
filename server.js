const Hapi = require('hapi')
const dotenv = require('dotenv').config()
var routes = require('./config/routes')
const db = require('./config/db').db

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
})

server.route(routes)

const init = async () => {
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()