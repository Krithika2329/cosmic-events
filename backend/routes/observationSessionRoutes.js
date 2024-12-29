const express = require('express');
const router = express.Router();
const observationSessionController = require('../controllers/observationSessionController');

router.get('/', observationSessionController.getAllObservationSessions);
router.get('/:id', observationSessionController.getObservationSessionById);
router.post('/', observationSessionController.createObservationSession);
router.put('/:id', observationSessionController.updateObservationSession);
router.delete('/:id', observationSessionController.deleteObservationSession);

module.exports = router;