const db = require('../config/db');

exports.getAllObservationSessions = (callback) => {
    db.query('SELECT * FROM ObservationSession', callback);
};

exports.getObservationSessionById = (id, callback) => {
    db.query('SELECT * FROM ObservationSession WHERE ObservationID = ?', [id], callback);
};

exports.createObservationSession = (session, callback) => {
    const { EventID, ObserverID, ObservationDateTime, Duration, WeatherConditions, DataCollected, Notes } = session;
    db.query('INSERT INTO ObservationSession (EventID, ObserverID, ObservationDateTime, Duration, WeatherConditions, DataCollected, Notes) VALUES (?, ?, ?, ?, ?, ?, ?)', [EventID, ObserverID, ObservationDateTime, Duration, WeatherConditions, DataCollected, Notes], callback);
};

exports.updateObservationSession = (id, session, callback) => {
    const { EventID, ObserverID, ObservationDateTime, Duration, WeatherConditions, DataCollected, Notes } = session;
    db.query('UPDATE ObservationSession SET EventID = ?, ObserverID = ?, ObservationDateTime = ?, Duration = ?, WeatherConditions = ?, DataCollected = ?, Notes = ? WHERE ObservationID = ?', [EventID, ObserverID, ObservationDateTime, Duration, WeatherConditions, DataCollected, Notes, id], callback);
};

exports.deleteObservationSession = (id, callback) => {
    db.query('DELETE FROM ObservationSession WHERE ObservationID = ?', [id], callback);
};