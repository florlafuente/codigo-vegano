const Hapi = require('hapi')

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
})

const init = async () => {
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

server.route({
  method: 'GET',
  path: '/products',
  handler:  (request, h) => {
    return 'Hello products!'
  }
})

server.route({
  method: 'GET',
  path: '/users',
  handler:  (request, h) => {
    return 'Hello users!'
  }
})

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()