const db = require('../data/db-config')

const Users = require('./users-model')

describe('users model', () => {
  afterEach(async () => {
    // this function executes and clears out the table before each test
    await db('user').truncate()
  })
  describe('addNewUser()', () => {
    it('should insert a new user into the database', async () => {
      await Users.addNewUser({ email: 'luis@email.com', password: 'password' })
      await Users.addNewUser({
        email: 'cynthia@email.com',
        password: 'password!',
      })

      const users = await db('user')

      expect(users).toHaveLength(2)
    })
  })
  describe('getUserById(id)', () => {
    it('should get all users in the database', async () => {
      await Users.addNewUser({ email: 'admin@email.com', password: 'password' })
      const user = await Users.getUserById(1)

      expect(user.email).toBe('admin@email.com')
    })
  })

  describe('deleteUser()', () => {
    it('should delete user', async () => {
      await Users.addNewUser({ email: 'luis@email.com', password: 'password' })
      await Users.addNewUser({
        email: 'cynthia@email.com',
        password: 'password',
      })
      await Users.deleteUser(1)
      const user = await Users.getUserById(1)

      expect(user).toBe(undefined)
    })
  })
})
