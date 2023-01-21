const express = require('express')
const cors = require('cors')
const router = require('./routes/user')
require('./db/database')
// const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const app = express()
const port = 3000
dotenv.config()

app.listen(port, () => {
  console.log('Service running on port : ', port)
})

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
// const user = {
//   email: 'puthsithamoeurn@gmail.com',
//   password: '123456',
// }

// const refresh_Token = []
app.use('/user', router)
// app.post('/login', (req, res) => {
//   if (!req.body.email || !req.body.password) {
//     return res.json({
//       message: 'email and password are required',
//     })
//   }
//   if (req.body.email == user.email && req.body.password == user.password) {
//     const token = jwt.sign(user, process.env.JWT_SERCRET_KEY, {
//       expiresIn: '20s',
//     })
//     const refreshToken = jwt.sign(user, process.env.JWT_REFRESH_SERCRET_KEY)
//     refresh_Token.push(refreshToken)
//     return res.json({ token, refreshToken })
//   }
//   res.json({
//     message: 'Unauthorization',
//   })
// })

// const jwtVerify = (req, res, next) => {
//   const token = req.header(process.env.TOKEN_HEADER_KEY)
//   jwt.verify(token, process.env.JWT_SERCRET_KEY, (err, user) => {
//     if (err) return res.json({ message: 'something wrong' })
//     req.user = user
//     next()
//   })
// }

// app.get('/user', jwtVerify, (req, res) => {
//   res.json({
//     message: 'login successful',
//   })
// })

// app.post('/token', (req, res) => {
//   if (!req.body.refreshToken) return res.json({ message: 'need refresh token' })
//   const refreshToken = req.body.refreshToken
//   if (!refresh_Token.includes(refreshToken))
//     res.json({ message: 'no refresh token' })
//   jwt.verify(refreshToken, process.env.JWT_REFRESH_SERCRET_KEY, (err, res) => {
//     if (err) return res.json({ message: 'error' })
//     const token = jwt.sign(user, process.env.JWT_SERCRET_KEY, {
//       expiresIn: '20s',
//     })
//     res.json({ token })
//   })
// })
