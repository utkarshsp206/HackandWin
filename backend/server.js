import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'
import cors from 'cors'
import { PORT, DB_URI } from './config'
import errorHandler from './middleware/errorHandler'

const app = express()

mongoose.connect(DB_URI)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Database Connection Error'))
db.once('open', () => {
  console.log('Database Connected')
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.use(routes)

app.use(errorHandler)
app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`)
})
