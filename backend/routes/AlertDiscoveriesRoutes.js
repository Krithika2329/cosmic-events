const express = require('express');
const router = express.Router();
const alertsDiscoveriesController = require('../controllers/AlertDiscoveriesController');

router.get('/', alertsDiscoveriesController.getAllAlertsDiscoveries);
router.get('/:id', alertsDiscoveriesController.getAlertDiscoveryById);
router.post('/', alertsDiscoveriesController.createAlertDiscovery);
router.put('/:id', alertsDiscoveriesController.updateAlertDiscovery);
router.delete('/:id', alertsDiscoveriesController.deleteAlertDiscovery);

module.exports = router;