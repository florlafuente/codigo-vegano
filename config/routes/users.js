module.exports = [
  { 
    method: 'GET',
    path: '/users',
    handler: () => {
      return ('/users')
    }
  },
  { 
    method: 'GET',
    path: '/users/{id}',
    handler: ({ params: {id} }) => {
      return (`/users/${id}`)
    }
  }
]