const eventClassificationModel = require('../models/EventClassification');

exports.getAllEventClassifications = (req, res) => {
    eventClassificationModel.getAllEventClassifications((err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
};

exports.getEventClassificationById = (req, res) => {
    const id = req.params.id;
    eventClassificationModel.getEventClassificationById(id, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results[0]);
    });
};

exports.createEventClassification = (req, res) => {
    const classification = req.body;
    eventClassificationModel.createEventClassification(classification, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).json({ id: results.insertId });
    });
};

exports.updateEventClassification = (req, res) => {
    const id = req.params.id;
    const classification = req.body;
    eventClassificationModel.updateEventClassification(id, classification, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Event classification updated successfully' });
    });
};

exports.deleteEventClassification = (req, res) => {
    const id = req.params.id;
    eventClassificationModel.deleteEventClassification(id, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Event classification deleted successfully' });
    });
};