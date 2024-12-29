const observationSessionModel = require('../models/observationSession');

exports.getAllObservationSessions = (req, res) => {
    observationSessionModel.getAllObservationSessions((err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
};

exports.getObservationSessionById = (req, res) => {
    const id = req.params.id;
    observationSessionModel.getObservationSessionById(id, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results[0]);
    });
};

exports.createObservationSession = (req, res) => {
    const session = req.body;
    observationSessionModel.createObservationSession(session, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).json({ id: results.insertId });
    });
};

exports.updateObservationSession = (req, res) => {
    const id = req.params.id;
    const session = req.body;
    observationSessionModel.updateObservationSession(id, session, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Observation session updated successfully' });
    });
};

exports.deleteObservationSession = (req, res) => {
    const id = req.params.id;
    observationSessionModel.deleteObservationSession(id, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Observation session deleted successfully' });
    });
};