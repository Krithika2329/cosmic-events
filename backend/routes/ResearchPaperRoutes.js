const express = require('express');
const router = express.Router();
const researchPaperController = require('../controllers/ResearchPaperController');

router.get('/', researchPaperController.getAllResearchPapers);
router.get('/:id', researchPaperController.getResearchPaperById);
router.post('/', researchPaperController.createResearchPaper);
router.put('/:id', researchPaperController.updateResearchPaper);
router.delete('/:id', researchPaperController.deleteResearchPaper);

module.exports = router;