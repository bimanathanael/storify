require('dotenv').config()
const express =require('express')
const router = require('./routing')
const errorHandler = require('./middlewares/errorHandler')

const PORT = 3000

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)
app.use(errorHandler)

app.listen(PORT, function(){
    console.log(`now running on port 3000`)
})