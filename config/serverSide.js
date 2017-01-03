const domain = 'http://localhost';
const rootDir = '/var/www/cezerin';

module.exports = {
  storeBaseUrl: domain,
  language: 'en',

  security: {
    jwtSecret: 'QjiYppcTZOBGHfFD4g0mZD'
  },
  server: {
    mongodb: 'mongodb://u2028:DbBWjAcUnoVD6Oai2NlwF5nlFnpjwG@139.59.130.223:27017/shop'
  },

  path: {
    uploads: {
      categories: `${rootDir}/public/uploads/categories`,
      products: `${rootDir}/public/uploads/products`,
      files: `${rootDir}/public/uploads/files`
    }
  },

  url: {
    uploads: {
      categories: `${domain}/static/categories`,
      products: `${domain}/static/products`,
      files: `${domain}/static/files`
    }
  },

  api: {
    baseUrl: `${domain}/api`,
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNDc0OTgxNTE1fQ.dEyqeTPqFErKqoFKXTi6joNMn8UHgTvGWsjNMHJ7owY'
  }
}
