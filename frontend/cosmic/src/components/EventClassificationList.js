import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EventClassificationList = () => {
    const [classifications, setClassifications] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/event-classifications')
            .then(response => {
                setClassifications(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the event classifications!', error);
            });
    }, []);

    return (
        <div>
            <h1>Event Classifications</h1>
            <ul>
                {classifications.map(classification => (
                    <li key={classification.ClassificationID}>{classification.Category}</li>
                ))}
            </ul>
        </div>
    );
};

export default EventClassificationList;