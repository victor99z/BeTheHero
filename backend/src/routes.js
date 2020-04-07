const express = require('express');

const OngController = require('./controller/OngController')
const IncidentController = require('./controller/IncidentController')
const ProfileController = require('./controller/ProfileController')
const SessionController = require('./controller/SessionController')

const incidentsVal = require('./validators/incidentsValidator')
const ongVal = require('./validators/ongValidator')
const authVal = require('./validators/authValidador')
const profileVal = require('./validators/profileValidator')

const routes = express.Router();

/** 
 * Routes for access the data from ongs
*/

routes.get('/ongs', OngController.index)
routes.post('/ongs', ongVal.createValidator, OngController.create)

/** 
 * Routes for access the data from incidents by ongs
*/

routes.post('/incidents', incidentsVal.createIncidents, IncidentController.create)
routes.get('/incidents', incidentsVal.getIncidents, IncidentController.index)
routes.delete('/incidents/:id', incidentsVal.deleteIncidents, IncidentController.destroy)

/**  
 * Route to get the profile from an ONG
 * 
*/

routes.get('/profile', authVal, ProfileController.index)

/**
 * Route for identication  
*/

routes.post('/sessions', profileVal, SessionController.create)

module.exports = routes;

