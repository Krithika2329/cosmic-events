const db = require('../config/db');

exports.getAllSpectralAnalyses = (callback) => {
    db.query('SELECT * FROM SpectralAnalysis', callback);
};

exports.getSpectralAnalysisById = (id, callback) => {
    db.query('SELECT * FROM SpectralAnalysis WHERE SpectrumID = ?', [id], callback);
};

exports.createSpectralAnalysis = (analysis, callback) => {
    const { EventID, WavelengthRange, Intensity, RedshiftValue, AnalysisDate, AnomaliesDetected } = analysis;
    db.query('INSERT INTO SpectralAnalysis (EventID, WavelengthRange, Intensity, RedshiftValue, AnalysisDate, AnomaliesDetected) VALUES (?, ?, ?, ?, ?, ?, ?)', [EventID, WavelengthRange, Intensity, RedshiftValue, AnalysisDate, AnomaliesDetected], callback);
};

exports.updateSpectralAnalysis = (id, analysis, callback) => {
    const { EventID, WavelengthRange, Intensity, RedshiftValue, AnalysisDate, AnomaliesDetected } = analysis;
    db.query('UPDATE SpectralAnalysis SET EventID = ?, WavelengthRange = ?, Intensity = ?, RedshiftValue = ?, AnalysisDate = ?, AnomaliesDetected = ? WHERE SpectrumID = ?', [EventID, WavelengthRange, Intensity, RedshiftValue, AnalysisDate, AnomaliesDetected, id], callback);
};

exports.deleteSpectralAnalysis = (id, callback) => {
    db.query('DELETE FROM SpectralAnalysis WHERE SpectrumID = ?', [id], callback);
};