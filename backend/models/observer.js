const db = require('../config/db');

exports.getAllObservers = (callback) => {
    db.query('SELECT * FROM Observer', callback);
};

exports.getObserverById = (id, callback) => {
    db.query('SELECT * FROM Observer WHERE ObserverID = ?', [id], callback);
};

exports.createObserver = (observer, callback) => {
    const { Name, Affiliation, Location, ContactInfo, EquipmentUsed } = observer;
    db.query('INSERT INTO Observer (Name, Affiliation, Location, ContactInfo, EquipmentUsed) VALUES (?, ?, ?, ?, ?)', [Name, Affiliation, Location, ContactInfo, EquipmentUsed], callback);
};

exports.updateObserver = (id, observer, callback) => {
    const { Name, Affiliation, Location, ContactInfo, EquipmentUsed } = observer;
    db.query('UPDATE Observer SET Name = ?, Affiliation = ?, Location = ?, ContactInfo = ?, EquipmentUsed = ? WHERE ObserverID = ?', [Name, Affiliation, Location, ContactInfo, EquipmentUsed, id], callback);
};

exports.deleteObserver = (id, callback) => {
    db.query('DELETE FROM Observer WHERE ObserverID = ?', [id], callback);
};