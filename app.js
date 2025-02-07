if (process.env.NODE_ENV != "production") {
    require('dotenv').config()
}

const cors = require('cors')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./routers')
const errorHandler = require('./middleware/errorHandler')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(router)
app.use(errorHandler)

app.listen( port, () => {
    console.log(`app listen to port ${port}`)
})

