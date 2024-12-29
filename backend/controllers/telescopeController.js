const telescopeModel = require('../models/telescope');

exports.getAllTelescopes = (req, res) => {
    telescopeModel.getAllTelescopes((err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
};

exports.getTelescopeById = (req, res) => {
    const id = req.params.id;
    telescopeModel.getTelescopeById(id, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results[0]);
    });
};

exports.createTelescope = (req, res) => {
    const telescope = req.body;
    telescopeModel.createTelescope(telescope, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).json({ id: results.insertId });
    });
};

exports.updateTelescope = (req, res) => {
    const id = req.params.id;
    const telescope = req.body;
    telescopeModel.updateTelescope(id, telescope, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Telescope updated successfully' });
    });
};

exports.deleteTelescope = (req, res) => {
    const id = req.params.id;
    telescopeModel.deleteTelescope(id, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Telescope deleted successfully' });
    });
};