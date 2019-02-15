module.exports = [
  { 
    method: 'GET',
    path: '/products',
    handler: () => {
      return ('/users')
    }
  },
  { 
    method: 'GET',
    path: '/products/{id}',
    handler: ({ params: {id} }) => {
      return (`/products/${id}`)
    }
  }
]
