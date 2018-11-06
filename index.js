require('dotenv').config()
const port = process.env.PORT || 3001

const express = require('express')

const app = express()

app.get('/', (req, res) => res.end('sosatb'))

app.listen(port)
