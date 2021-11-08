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

  async attUser(user) {
    const findedRole = (await this.get(`roles?type=${user.role}`))[0]
    const changedUser = await this.put(`users/${user.id}`, {
      ...user,
      role: findedRole.id
    })
    return {
      ...changedUser,
      role: findedRole
    }
  }

  async deleteUser(id) {
    await this.delete(`users/${id}`)
    return id
  }
}

module.exports = UsersApi