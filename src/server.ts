import express from "express";
import cors from 'cors'

const server = express()


server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
  res.send('hello, world!')
})

server.get('/user', (req, res) => {
  res.send('hello, user!')
})


server.listen(8182, () => {
  console.log('http://localhost:8182')
})