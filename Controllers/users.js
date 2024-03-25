exports.list = async(req, res) => {
    try{
        res.send('Hello users controllers')
    }catch(err){
        res.status(500).send('Server Error')
    }
}

exports.list_one = async(req, res) => {
    try{
        res.send('Hello users controllers user one')
    }catch(err){
        res.status(500).send('Server Error')
    }
}

exports.users_insert= async(req, res) => {
    try{
        res.send('Hello users controllers user one')
    }catch(err){
        res.status(500).send('Server Error')
    }
}

exports.users_update= async(req, res) => {
    try{
        res.send('Hello users controllers user one')
    }catch(err){
        res.status(500).send('Server Error')
    }
}

exports.users_delete= async(req, res) => {
    try{
        res.send('Hello users controllers user one')
    }catch(err){
        res.status(500).send('Server Error')
    }
}