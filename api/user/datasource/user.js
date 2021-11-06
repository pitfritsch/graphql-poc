const { RESTDataSource } = require('apollo-datasource-rest')

class UsersApi extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'http://localhost:3000'
  }

  async getUsers() {
    return this.get('users')
  }

  async getUser(id) {
    return this.get(`users/${id}`)
  }
}

module.exports = UsersApi