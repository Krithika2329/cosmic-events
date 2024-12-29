import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ObserverList = () => {
    const [observers, setObservers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/observers')
            .then(response => {
                setObservers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the observers!', error);
            });
    }, []);

    return (
        <div>
            <h1>Observers</h1>
            <ul>
                {observers.map(observer => (
                    <li key={observer.ObserverID}>{observer.Name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ObserverList;