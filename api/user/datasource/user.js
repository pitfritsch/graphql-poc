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
    const user = await this.get(`users/${id}`)
    user.role = await this.get(`roles/${user.role}`)
    return user
  }

  async addUser(user) {
    const findedRole = await this.get(`roles?type=${user.role}`)
    const addedUser = await this.post('users', {
      ...user,
      role:  findedRole[0].id
    })
    return {
      ...addedUser,
      role: findedRole[0]
    }
  }
}

module.exports = UsersApi