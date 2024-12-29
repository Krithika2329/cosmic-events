const db = require('../config/db');

exports.getAllEvents = (req, res) => {
    db.query('SELECT * FROM CosmicEvent', (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
};

exports.getEventById = (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM CosmicEvent WHERE EventID = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results[0]);
    });
};

exports.createEvent = (req, res) => {
    const { Name, Type, DiscoveryDate, Duration, Coordinates, Magnitude, ObserverID, Description } = req.body;
    db.query('INSERT INTO CosmicEvent (Name, Type, DiscoveryDate, Duration, Coordinates, Magnitude, ObserverID, Description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [Name, Type, DiscoveryDate, Duration, Coordinates, Magnitude, ObserverID, Description], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).json({ id: results.insertId });
    });
};

exports.updateEvent = (req, res) => {
    const id = req.params.id;
    const { Name, Type, DiscoveryDate, Duration, Coordinates, Magnitude, ObserverID, Description } = req.body;
    db.query('UPDATE CosmicEvent SET Name = ?, Type = ?, DiscoveryDate = ?, Duration = ?, Coordinates = ?, Magnitude = ?, ObserverID = ?, Description = ? WHERE EventID = ?', [Name, Type, DiscoveryDate, Duration, Coordinates, Magnitude, ObserverID, Description, id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Event updated successfully' });
    });
};

exports.deleteEvent = (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM CosmicEvent WHERE EventID = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Event deleted successfully' });
    });
};

exports.searchCosmicEvent = (req, res) => {
    const searchTerm = req.query.q;
    const query = `
        SELECT 
            EventID, Name, Type, DiscoveryDate, Description 
        FROM 
            CosmicEvent 
        WHERE 
            Name LIKE ? OR Type LIKE ? OR DiscoveryDate LIKE ?
    `;
    const searchValue = `%${searchTerm}%`;
    db.query(query, [searchValue, searchValue, searchValue], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
};