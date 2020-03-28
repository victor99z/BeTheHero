const connection = require('../database/connection')


async function index(req, res){
    const ong_id = request.header.auth
    const incidents = await connection('connection')
        .where('ong_id', ong_id)
        .select('*')

    return res.json(incidents)
}

module.exports = { index }