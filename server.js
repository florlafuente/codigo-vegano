const Hapi = require('hapi')
var routes = require('./config/routes')

const server = Hapi.server({
  port: 8000,
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