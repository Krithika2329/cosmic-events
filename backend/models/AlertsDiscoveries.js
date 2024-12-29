const db = require('../config/db');

exports.getAllAlertsDiscoveries = (callback) => {
    db.query('SELECT * FROM AlertsDiscoveries', callback);
};

exports.getAlertDiscoveryById = (id, callback) => {
    db.query('SELECT * FROM AlertsDiscoveries WHERE AlertID = ?', [id], callback);
};

exports.createAlertDiscovery = (alert, callback) => {
    const { EventID, AlertDateTime, DiscoveryMethod, AlertType, Description, ActionTaken } = alert;
    db.query('INSERT INTO AlertsDiscoveries (EventID, AlertDateTime, DiscoveryMethod, AlertType, Description, ActionTaken) VALUES (?, ?, ?, ?, ?, ?, ?)', [EventID, AlertDateTime, DiscoveryMethod, AlertType, Description, ActionTaken], callback);
};

exports.updateAlertDiscovery = (id, alert, callback) => {
    const { EventID, AlertDateTime, DiscoveryMethod, AlertType, Description, ActionTaken } = alert;
    db.query('UPDATE AlertsDiscoveries SET EventID = ?, AlertDateTime = ?, DiscoveryMethod = ?, AlertType = ?, Description = ?, ActionTaken = ? WHERE AlertID = ?', [EventID, AlertDateTime, DiscoveryMethod, AlertType, Description, ActionTaken, id], callback);
};

exports.deleteAlertDiscovery = (id, callback) => {
    db.query('DELETE FROM AlertsDiscoveries WHERE AlertID = ?', [id], callback);
};