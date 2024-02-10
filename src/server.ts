import express from "express";
import cors from 'cors'

const server = express()
const port = process.env.PORT || 8182


server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
  res.send('hello, world!')
})

server.get('/user', (req, res) => {
  res.send('hello, user!')
})


server.listen(port, () => {
  console.log('http://localhost:8182')
})