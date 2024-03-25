const { response } = require("express")
const users_model = require("../Models/users_model")

exports.list = async(req, res) => {
    try{
        if(req.get('token')=== "asdsajdjsdoifhwpOJA" ){
            const UserName = req.query.UserName
            const PassWord = req.query.PassWord
            const user = await users_model.find({
                UserName:UserName,
                PassWord:PassWord
            }).exec()
            
            let response = {
                status:true,
                data:user
            }

            res.json(response)
        }else{
            let response = {
                status:false,
                message:"Token invalid"
            }
            
            res.json(response)
        }
        
        // res.send(user)
    
    }catch(err){
        res.status(500).send('Server Error')
    }
}

exports.list_one = async(req, res) => {
    try{
        const id = req.params.id
        console.log(id)
        const user = await users_model.find({_id:id}).exec()
        res.send(user)
    }catch(err){
        res.status(500).send('Server Error')
    }
}

exports.users_insert = async(req, res) => {
    try{
        console.log(req.body)
        const users = await users_model(req.body).save()

        res.send(users)
    }catch(err){
        res.status(500).send('Server Error')
    }
}

exports.users_update= async(req, res) => {
    try{
        const id = req.params.id
        console.log(id)
        const user = await users_model
        .findOneAndUpdate({_id:id}, req.body, {new:true})
        .exec()

        res.send(user)
    }catch(err){
        res.status(500).send('Server Error')
    }
}

exports.users_delete= async(req, res) => {
    try{
        const id = req.params.id
        console.log(id)
        const user = await users_model
        .findOneAndDelete({_id:id}, req.body, {new:true})
        .exec()
        
        res.send(user)
    }catch(err){
        res.status(500).send('Server Error')
    }
}