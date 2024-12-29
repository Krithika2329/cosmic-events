const express = require('express');
const router = express.Router();
const observerController = require('../controllers/observerController');

router.get('/', observerController.getAllObservers);
router.get('/:id', observerController.getObserverById);
router.post('/', observerController.createObserver);
router.put('/:id', observerController.updateObserver);
router.delete('/:id', observerController.deleteObserver);

module.exports = router;