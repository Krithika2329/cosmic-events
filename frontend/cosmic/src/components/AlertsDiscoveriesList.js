import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AlertsDiscoveriesList = () => {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/alerts-discoveries')
            .then(response => {
                setAlerts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the alerts discoveries!', error);
            });
    }, []);

    return (
        <div>
            <h1>Alerts Discoveries</h1>
            <ul>
                {alerts.map(alert => (
                    <li key={alert.AlertID}>{alert.AlertType}</li>
                ))}
            </ul>
        </div>
    );
};

export default AlertsDiscoveriesList;