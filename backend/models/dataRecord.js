const db = require('../config/db');

exports.getAllDataRecords = (callback) => {
    db.query('SELECT * FROM DataRecord', callback);
};

exports.getDataRecordById = (id, callback) => {
    db.query('SELECT * FROM DataRecord WHERE RecordID = ?', [id], callback);
};

exports.createDataRecord = (record, callback) => {
    const { EventID, DataType, FileNamePath, Format, Timestamp, DataSize, ProcessingStatus } = record;
    db.query('INSERT INTO DataRecord (EventID, DataType, FileNamePath, Format, Timestamp, DataSize, ProcessingStatus) VALUES (?, ?, ?, ?, ?, ?, ?)', [EventID, DataType, FileNamePath, Format, Timestamp, DataSize, ProcessingStatus], callback);
};

exports.updateDataRecord = (id, record, callback) => {
    const { EventID, DataType, FileNamePath, Format, Timestamp, DataSize, ProcessingStatus } = record;
    db.query('UPDATE DataRecord SET EventID = ?, DataType = ?, FileNamePath = ?, Format = ?, Timestamp = ?, DataSize = ?, ProcessingStatus = ? WHERE RecordID = ?', [EventID, DataType, FileNamePath, Format, Timestamp, DataSize, ProcessingStatus, id], callback);
};

exports.deleteDataRecord = (id, callback) => {
    db.query('DELETE FROM DataRecord WHERE RecordID = ?', [id], callback);
};