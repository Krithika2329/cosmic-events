const researchPaperModel = require('../models/ResearchPaper');

exports.getAllResearchPapers = (req, res) => {
    researchPaperModel.getAllResearchPapers((err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
};

exports.getResearchPaperById = (req, res) => {
    const id = req.params.id;
    researchPaperModel.getResearchPaperById(id, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results[0]);
    });
};

exports.createResearchPaper = (req, res) => {
    const paper = req.body;
    researchPaperModel.createResearchPaper(paper, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).json({ id: results.insertId });
    });
};

exports.updateResearchPaper = (req, res) => {
    const id = req.params.id;
    const paper = req.body;
    researchPaperModel.updateResearchPaper(id, paper, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Research paper updated successfully' });
    });
};

exports.deleteResearchPaper = (req, res) => {
    const id = req.params.id;
    researchPaperModel.deleteResearchPaper(id, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Research paper deleted successfully' });
    });
};