import mongoose from 'mongoose'
import { database } from './index.js'

const { username, host, name, password } = database

console.log('Database Config:', { username, host, name, password })

const URI = `mongodb+srv://${username}:${password}@${host}/${name}?retryWrites=true&w=majority`

const { connection } = mongoose

connection.on('error', () => {
  console.error('Error database connection 🔴')
})

connection.on('open', () => {
  console.info('database connection 🟢 ')
})

mongoose.connect(URI)
