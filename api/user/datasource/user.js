const { RESTDataSource } = require('apollo-datasource-rest')

class UsersApi extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'http://localhost:3000'
  }

  async getUsers() {
    const allUsers = await this.get('users')
    for (const user of allUsers) {
      user.role = await this.get(`roles/${user.role}`)
    }
    return allUsers
  }

  async getUser(id) {
    const user = this.get(`users/${id}`)
    user.role = await this.get(`roles/${user.role}`)
    return user
  }
}

module.exports = UsersApi