const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

const port = config.PORT || 3000
const server = http.createServer(app)

server.listen(port, () => logger.info(`App listening on port ${port}`))
