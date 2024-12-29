const express = require('express');
const router = express.Router();
const cosmicEventController = require('../controllers/cosmicEventController');

router.get('/', cosmicEventController.getAllEvents);
router.get('/:id', cosmicEventController.getEventById);
router.post('/', cosmicEventController.createEvent);
router.put('/:id', cosmicEventController.updateEvent);
router.delete('/:id', cosmicEventController.deleteEvent);

// New route for searching cosmic events
router.get('/search', cosmicEventController.searchCosmicEvent);

module.exports = router;