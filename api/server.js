const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const authRouter = require('../auth/auth-router')
const usersRouter = require('../users/users-router')
const itemsRouter = require('../items/items-router')
const categoryRouter = require('../categories/categories-router')
const favoriteRouter = require('../favorites/favorites-router')

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cookieParser())
server.use(cors({ origin: '*' }))

server.use('/api/auth', authRouter)
server.use('/api/users', usersRouter)
server.use('/api/items', itemsRouter)
server.use('/api/category', categoryRouter)
server.use('/api/favorites', favoriteRouter)

server.get('/', (req, res) => {
  res.send(' Welcome to African Marketplace API')
})

module.exports = server
