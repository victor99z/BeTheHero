const connection = require('../database/connection')

async function create(req, res){
    const { title, description, value } = req.body
    const ong_id = req.headers.auth

    const [id] = await connection('incidents').insert({
        title,
        description,
        value,
        ong_id
    })
    return res.json({id})
}

async function index(req, res){

    const data = await connection('incidents').select('*')
    return res.json(data)

}

module.exports = { create, index }