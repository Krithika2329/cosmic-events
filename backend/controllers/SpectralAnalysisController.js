const spectralAnalysisModel = require('../models/SpectralAnalysis');

exports.getAllSpectralAnalyses = (req, res) => {
    spectralAnalysisModel.getAllSpectralAnalyses((err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
};

exports.getSpectralAnalysisById = (req, res) => {
    const id = req.params.id;
    spectralAnalysisModel.getSpectralAnalysisById(id, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results[0]);
    });
};

exports.createSpectralAnalysis = (req, res) => {
    const analysis = req.body;
    spectralAnalysisModel.createSpectralAnalysis(analysis, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).json({ id: results.insertId });
    });
};

exports.updateSpectralAnalysis = (req, res) => {
    const id = req.params.id;
    const analysis = req.body;
    spectralAnalysisModel.updateSpectralAnalysis(id, analysis, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Spectral analysis updated successfully' });
    });
};

exports.deleteSpectralAnalysis = (req, res) => {
    const id = req.params.id;
    spectralAnalysisModel.deleteSpectralAnalysis(id, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Spectral analysis deleted successfully' });
    });
};