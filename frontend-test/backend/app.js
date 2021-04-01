const express = require('express')
const app = express()
const port = 8000
const router = require('./routes/index')
const cors = require('cors')

app.use(express.json())

app.use(cors())

app.use(express.urlencoded({
    extended:true
}))

app.use('/', router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})