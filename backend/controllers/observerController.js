const observerModel = require('../models/observer');

exports.getAllObservers = (req, res) => {
    observerModel.getAllObservers((err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
};

exports.getObserverById = (req, res) => {
    const id = req.params.id;
    observerModel.getObserverById(id, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results[0]);
    });
};

exports.createObserver = (req, res) => {
    const observer = req.body;
    observerModel.createObserver(observer, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).json({ id: results.insertId });
    });
};

exports.updateObserver = (req, res) => {
    const id = req.params.id;
    const observer = req.body;
    observerModel.updateObserver(id, observer, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Observer updated successfully' });
    });
};

exports.deleteObserver = (req, res) => {
    const id = req.params.id;
    observerModel.deleteObserver(id, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Observer deleted successfully' });
    });
};