const alertsDiscoveriesModel = require('../models/AlertsDiscoveries');

exports.getAllAlertsDiscoveries = (req, res) => {
    alertsDiscoveriesModel.getAllAlertsDiscoveries((err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
};

exports.getAlertDiscoveryById = (req, res) => {
    const id = req.params.id;
    alertsDiscoveriesModel.getAlertDiscoveryById(id, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results[0]);
    });
};

exports.createAlertDiscovery = (req, res) => {
    const alert = req.body;
    alertsDiscoveriesModel.createAlertDiscovery(alert, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).json({ id: results.insertId });
    });
};

exports.updateAlertDiscovery = (req, res) => {
    const id = req.params.id;
    const alert = req.body;
    alertsDiscoveriesModel.updateAlertDiscovery(id, alert, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Alert discovery updated successfully' });
    });
};

exports.deleteAlertDiscovery = (req, res) => {
    const id = req.params.id;
    alertsDiscoveriesModel.deleteAlertDiscovery(id, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Alert discovery deleted successfully' });
    });
};