const express = require('express');
const router = express.Router();
const dataRecordController = require('../controllers/dataRecordController');

router.get('/', dataRecordController.getAllDataRecords);
router.get('/:id', dataRecordController.getDataRecordById);
router.post('/', dataRecordController.createDataRecord);
router.put('/:id', dataRecordController.updateDataRecord);
router.delete('/:id', dataRecordController.deleteDataRecord);

module.exports = router;