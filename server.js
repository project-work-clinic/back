import http from 'http'
import api from './src/api.js'
import './src/config/database.js'

const server = http.createServer(api)

server.on('listening', () => {
  console.info('server running http://localhost:8000')
})

server.listen(8000)
