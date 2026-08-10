import express from 'express'
import db from './config/database'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send({ message: 'OctoFit Tracker backend running on port 8000' })
})

const PORT = process.env.PORT ? Number(process.env.PORT) : 8000

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
