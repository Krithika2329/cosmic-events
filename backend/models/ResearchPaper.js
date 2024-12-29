const db = require('../config/db');

exports.getAllResearchPapers = (callback) => {
    db.query('SELECT * FROM ResearchPaper', callback);
};

exports.getResearchPaperById = (id, callback) => {
    db.query('SELECT * FROM ResearchPaper WHERE PaperID = ?', [id], callback);
};

exports.createResearchPaper = (paper, callback) => {
    const { EventID, Title, Authors, JournalConferenceName, PublicationDate, DOI_URL, Abstract } = paper;
    db.query('INSERT INTO ResearchPaper (EventID, Title, Authors, JournalConferenceName, PublicationDate, DOI_URL, Abstract) VALUES (?, ?, ?, ?, ?, ?, ?)', [EventID, Title, Authors, JournalConferenceName, PublicationDate, DOI_URL, Abstract], callback);
};

exports.updateResearchPaper = (id, paper, callback) => {
    const { EventID, Title, Authors, JournalConferenceName, PublicationDate, DOI_URL, Abstract } = paper;
    db.query('UPDATE ResearchPaper SET EventID = ?, Title = ?, Authors = ?, JournalConferenceName = ?, PublicationDate = ?, DOI_URL = ?, Abstract = ? WHERE PaperID = ?', [EventID, Title, Authors, JournalConferenceName, PublicationDate, DOI_URL, Abstract, id], callback);
};

exports.deleteResearchPaper = (id, callback) => {
    db.query('DELETE FROM ResearchPaper WHERE PaperID = ?', [id], callback);
};