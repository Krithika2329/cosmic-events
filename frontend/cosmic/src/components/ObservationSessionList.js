import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ObservationSessionList = () => {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/observation-sessions')
            .then(response => {
                setSessions(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the observation sessions!', error);
            });
    }, []);

    return (
        <div>
            <h1>Observation Sessions</h1>
            <ul>
                {sessions.map(session => (
                    <li key={session.ObservationID}>{session.ObservationDateTime}</li>
                ))}
            </ul>
        </div>
    );
};

export default ObservationSessionList;