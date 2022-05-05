const express = require('express');
const Router = express.Router();

const pharmarciesController = require('../controllers/pharmacies.controller');

Router.get('/', pharmarciesController.listPharmacies);

Router.get('/:id', pharmarciesController.getPharmacyById);

Router.post('/', pharmarciesController.createPharmacy);

Router.delete('/:id', pharmarciesController.deletePharmacy);

Router.patch('/:id', pharmarciesController.editPharmacy);

module.exports = Router;
