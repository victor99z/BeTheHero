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

async function destroy(req, res){
    const { id } = req.params
    const ong_id = req.headers.auth

    const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first();

    if(incident.ong_id !== ong_id){
        return res.status(401).json({ error : "Operation not permitted"})
    }

    await connection('incidents').where('id', id).delete()

    return res.status(204).send()

}

module.exports = { create, index, destroy }