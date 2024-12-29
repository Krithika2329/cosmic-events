import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CosmicEventList = ({ observerName }) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                let response;
                if (observerName) {
                    response = await axios.get(`http://localhost:3000/events/observer/${observerName}`);
                } else {
                    response = await axios.get('http://localhost:3000/events');
                }
                setEvents(response.data);
            } catch (error) {
                console.error('There was an error fetching the events!', error);
            }
        };

        fetchEvents();
    }, [observerName]);

    return (
        <div>
            <h1>{observerName ? `Events Observed by ${observerName}` : 'Cosmic Events'}</h1>
            <ul>
                {events.map(event => (
                    <li key={event.EventID}>
                        <h2>{event.EventName}</h2>
                        <p>Type: {event.Type}</p>
                        <p>Discovery Date: {event.DiscoveryDate}</p>
                        <p>Description: {event.Description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CosmicEventList;