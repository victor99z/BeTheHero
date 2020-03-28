const express = require('express');

const OngController = require('./controller/OngController')
const IncidentController = require('./controller/IncidentController')
const ProfileController = require('./controller/ProfileController')

const routes = express.Router();

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.destroy)

routes.get('/profile', ProfileController.index)

module.exports = routes;

