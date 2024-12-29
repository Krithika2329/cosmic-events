const express = require('express');
const router = express.Router();
const spectralAnalysisController = require('../controllers/SpectralAnalysisController');

router.get('/', spectralAnalysisController.getAllSpectralAnalyses);
router.get('/:id', spectralAnalysisController.getSpectralAnalysisById);
router.post('/', spectralAnalysisController.createSpectralAnalysis);
router.put('/:id', spectralAnalysisController.updateSpectralAnalysis);
router.delete('/:id', spectralAnalysisController.deleteSpectralAnalysis);

module.exports = router;