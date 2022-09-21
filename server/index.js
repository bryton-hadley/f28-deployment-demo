const express = require('express')

const path = require('path')

 require('dotenv').config()

const port = process.env.PORT || 6000

const app = express()

app.use(express.json())

//THIS ENDPOINTS TO SEND ALL FILES 
app.use('/', express.static(path.join(__dirname, '../client/index.html')))

app.use(express.static(path.join(__dirname, '../client')))

//THIS ENDPOINTS TO SEND INDIVIDUAL FILES
//you can add your normal get and post and delete and put 
// app.get('/', (req, res) => {

//     res.sendFile(path.join(__dirname, '../client/index.html'))

// })

// app.get('/js', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/main.js'))
//   })



app.listen(port, () => {
    console.log('Dock at port' + port)
})