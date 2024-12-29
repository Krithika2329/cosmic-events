const dataRecordModel = require('../models/dataRecord');

exports.getAllDataRecords = (req, res) => {
    dataRecordModel.getAllDataRecords((err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
};

exports.getDataRecordById = (req, res) => {
    const id = req.params.id;
    dataRecordModel.getDataRecordById(id, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results[0]);
    });
};

exports.createDataRecord = (req, res) => {
    const record = req.body;
    dataRecordModel.createDataRecord(record, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).json({ id: results.insertId });
    });
};

exports.updateDataRecord = (req, res) => {
    const id = req.params.id;
    const record = req.body;
    dataRecordModel.updateDataRecord(id, record, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Data record updated successfully' });
    });
};

exports.deleteDataRecord = (req, res) => {
    const id = req.params.id;
    dataRecordModel.deleteDataRecord(id, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ message: 'Data record deleted successfully' });
    });
};