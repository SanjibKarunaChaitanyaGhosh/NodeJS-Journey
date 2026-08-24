import express from 'express'

const app = express()

port=40002

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(4002, () => {
  console.log(`Server is running on http://localhost:${port}`)
})