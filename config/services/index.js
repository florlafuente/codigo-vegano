const request = require('request')

const mediumRequest = () => new Promise((resolve, reject) => {
  request({
    'url': 'https://medium.com/@flor.lafuente/latest',
    headers: {
      'Accept': 'application/json'
    }
  }, (error, response, body) => {
    if (error) return reject(error)
    let publications = Object.values(JSON.parse(body.replace('])}while(1);</x>', '')).payload.references.Post)

    const formatedPublications = publications.map((p) => ({
      id: p.id,
      url: `https://medium.com/@flor.lafuente/${p.uniqueSlug}`,
      title: p.title, 
      claps: p.virtuals.totalClapCount,
      createdAt: p.createdAt,
      image: p.virtuals.previewImage.imageId && `https://cdn-images-1.medium.com/fit/t/370/300/${p.virtuals.previewImage.imageId}`
    }))
    
    return resolve(formatedPublications)
  })
})

module.exports = {
  mediumRequest
}

