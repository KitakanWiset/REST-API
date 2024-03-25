const express = require('express')
const routers = express.Router()

const {
    list,
    list_one,
    users_insert,
    users_update,
    users_delete
} = require('../Controllers/users')

routers.get('/users', list)
routers.get('/users_one/:id', list_one)
routers.post('/users_insert', users_insert)
routers.put('/users_update/:id', users_update)
routers.delete('/users_delete/:id', users_delete)
// routers.get('/users',(req, res) =>{
//     res.send('Hello world!!!')
// })

module.exports = routers