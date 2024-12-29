const express = require('express');
const router = express.Router();
const telescopeController = require('../controllers/telescopeController');

router.get('/', telescopeController.getAllTelescopes);
router.get('/:id', telescopeController.getTelescopeById);
router.post('/', telescopeController.createTelescope);
router.put('/:id', telescopeController.updateTelescope);
router.delete('/:id', telescopeController.deleteTelescope);

module.exports = router;