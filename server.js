const express = require('express');
// const routeUsers = require('./Routes/users')

const { readdirSync } = require('fs')

const morgan = require('morgan')
const cors = require('cors')
const bodyParse = require('body-parser')
const connectDB = require('./Config/db')

const app = express();

connectDB();

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParse.json({limit:'10mb'}))
// app.use('/api', routeUsers)
// app.get('/users',(req, res) =>{
//     res.send('Hello world!!!')
// })

readdirSync('./Routes').map((r) => app.use('/api', require('./Routes/'+r)))

const port = 5000 ; 

app.listen(port, ()=>console.log('SERVER RUNNING PORT : '+port))