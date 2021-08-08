import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/abhinaya', function (req, res) {
  res.json({
    name: "Abhinaya",
    surname: "G.K"
  })
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on : http://localhost:${port}`)
})