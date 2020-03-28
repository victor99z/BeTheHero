const connection = require('../database/connection')


async function index(req, res){
    const ong_id = req.headers.auth
    const incidents = await connection('incidents')
        .where('ong_id', ong_id)
        .select('*');

    return res.json(incidents)
}

module.exports = { index }