const express = require('express');
const router = express.Router();
const eventClassificationController = require('../controllers/EventClassificationController');

router.get('/', eventClassificationController.getAllEventClassifications);
router.get('/:id', eventClassificationController.getEventClassificationById);
router.post('/', eventClassificationController.createEventClassification);
router.put('/:id', eventClassificationController.updateEventClassification);
router.delete('/:id', eventClassificationController.deleteEventClassification);

module.exports = router;