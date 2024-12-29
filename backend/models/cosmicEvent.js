const db = require('../config/db');

exports.getAllEvents = (callback) => {
    db.query('SELECT * FROM CosmicEvent', callback);
};

exports.getEventById = (id, callback) => {
    db.query('SELECT * FROM CosmicEvent WHERE EventID = ?', [id], callback);
};

exports.createEvent = (event, callback) => {
    const { Name, Type, DiscoveryDate, Duration, Coordinates, Magnitude, ObserverID, Description } = event;
    db.query('INSERT INTO CosmicEvent (Name, Type, DiscoveryDate, Duration, Coordinates, Magnitude, ObserverID, Description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [Name, Type, DiscoveryDate, Duration, Coordinates, Magnitude, ObserverID, Description], callback);
};

exports.updateEvent = (id, event, callback) => {
    const { Name, Type, DiscoveryDate, Duration, Coordinates, Magnitude, ObserverID, Description } = event;
    db.query('UPDATE CosmicEvent SET Name = ?, Type = ?, DiscoveryDate = ?, Duration = ?, Coordinates = ?, Magnitude = ?, ObserverID = ?, Description = ? WHERE EventID = ?', [Name, Type, DiscoveryDate, Duration, Coordinates, Magnitude, ObserverID, Description, id], callback);
};

exports.deleteEvent = (id, callback) => {
    db.query('DELETE FROM CosmicEvent WHERE EventID = ?', [id], callback);
};