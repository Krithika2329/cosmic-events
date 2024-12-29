const db = require('../config/db');

exports.getAllEventClassifications = (callback) => {
    db.query('SELECT * FROM EventClassification', callback);
};

exports.getEventClassificationById = (id, callback) => {
    db.query('SELECT * FROM EventClassification WHERE ClassificationID = ?', [id], callback);
};

exports.createEventClassification = (classification, callback) => {
    const { EventID, Category, Subcategory, ClassificationDate, ClassifierName, ConfidenceLevel } = classification;
    db.query('INSERT INTO EventClassification (EventID, Category, Subcategory, ClassificationDate, ClassifierName, ConfidenceLevel) VALUES (?, ?, ?, ?, ?, ?)', [EventID, Category, Subcategory, ClassificationDate, ClassifierName, ConfidenceLevel], callback);
};

exports.updateEventClassification = (id, classification, callback) => {
    const { EventID, Category, Subcategory, ClassificationDate, ClassifierName, ConfidenceLevel } = classification;
    db.query('UPDATE EventClassification SET EventID = ?, Category = ?, Subcategory = ?, ClassificationDate = ?, ClassifierName = ?, ConfidenceLevel = ? WHERE ClassificationID = ?', [EventID, Category, Subcategory, ClassificationDate, ClassifierName, ConfidenceLevel, id], callback);
};

exports.deleteEventClassification = (id, callback) => {
    db.query('DELETE FROM EventClassification WHERE ClassificationID = ?', [id], callback);
};