const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authRouter = require('../auth/auth-router')
const usersRouter = require('../users/users-router')
const itemsRouter = require('../items/items-router')
const categoryRouter = require('../categories/categories-router')
const favoriteRouter = require('../favorites/favorites-router')

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors({ origin: '*' }))

server.use('/api/auth', authRouter)
server.use('/api/users', usersRouter)
server.use('/api/items', itemsRouter)
server.use('/api/category', categoryRouter)
server.use('/api/favorites', favoriteRouter)

server.get('/', (req, res) => {
  res.send("🔥🔥🔥 It's alive! 🔥🔥🔥")
})
// above is server message shoudl display when api is running on heroku
module.exports = server
