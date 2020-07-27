const server = require('./api/server')
require('dotenv').config()

const port = process.env.PORT || 6000

server.listen(port, function() {
  console.log(
    `\n 🔥🔥🔥 Service is running on http://localhost:${port} 🔥🔥🔥 \n`
  )
})
