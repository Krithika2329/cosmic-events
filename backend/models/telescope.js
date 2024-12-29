const db = require('../config/db');

exports.getAllTelescopes = (callback) => {
    db.query('SELECT * FROM Telescope', callback);
};

exports.getTelescopeById = (id, callback) => {
    db.query('SELECT * FROM Telescope WHERE InstrumentID = ?', [id], callback);
};

exports.createTelescope = (telescope, callback) => {
    const { Name, Type, Location, Specifications, OperatingStatus, Owner } = telescope;
    db.query('INSERT INTO Telescope (Name, Type, Location, Specifications, OperatingStatus, Owner) VALUES (?, ?, ?, ?, ?, ?)', [Name, Type, Location, Specifications, OperatingStatus, Owner], callback);
};

exports.updateTelescope = (id, telescope, callback) => {
    const { Name, Type, Location, Specifications, OperatingStatus, Owner } = telescope;
    db.query('UPDATE Telescope SET Name = ?, Type = ?, Location = ?, Specifications = ?, OperatingStatus = ?, Owner = ? WHERE InstrumentID = ?', [Name, Type, Location, Specifications, OperatingStatus, Owner, id], callback);
};

exports.deleteTelescope = (id, callback) => {
    db.query('DELETE FROM Telescope WHERE InstrumentID = ?', [id], callback);
};