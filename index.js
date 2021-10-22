import express from 'express'
import router from './protectedRouteHandler.js'
import jwt from "jsonwebtoken";

const app = express()

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!'
    })
  })

  app.use('/protected', router)
  app.use((req, res) => {
    res.json({
      message: 'Not Found'
    })
  })
  app.listen(4000, () => {
    console.log('Server is running on port 4000')
  })

  jwt.sign({
    name: 'server'
  }, 'itis', {
    expiresIn: '1m'
  }, (err, token) => {
    console.log(token)
  }
  )
