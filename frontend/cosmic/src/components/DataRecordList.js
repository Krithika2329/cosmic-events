import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataRecordList = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/data-records')
            .then(response => {
                setRecords(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data records!', error);
            });
    }, []);

    return (
        <div>
            <h1>Data Records</h1>
            <ul>
                {records.map(record => (
                    <li key={record.RecordID}>{record.FileNamePath}</li>
                ))}
            </ul>
        </div>
    );
};

export default DataRecordList;