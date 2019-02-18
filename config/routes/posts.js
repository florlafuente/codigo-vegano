const { mediumRequest } = require('../services')

module.exports = [
  { 
    method: 'GET',
    path: '/posts',
    options: {
      cors: {
        origin: 'ignore'
      },
    },
    handler: (request, h) => {
      return mediumRequest()
        .then((res) => {
          console.log(res)
          return res
        })
    }
  }
]