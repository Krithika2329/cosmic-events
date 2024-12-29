import React, { useState } from 'react';
import './Events.css';

const Events = () => {
    const [events, setEvents] = useState([
        {
            id: 1,
            name: "Supernova SN2023xyz",
            type: "Supernova",
            discoveryDate: "2023-11-01",
            coordinates: "RA: 13h47m33.5s Dec: -11°23'22\"",
            magnitude: "16.2",
        },
        {
            id: 2,
            name: "Black Hole Cygnus X-1",
            type: "Black Hole",
            discoveryDate: "2024-01-15",
            coordinates: "RA: 19h58m21.7s Dec: +35°12'05\"",
            magnitude: "Unknown",
        },
    ]);

    const [newEvent, setNewEvent] = useState({
        name: '',
        type: '',
        discoveryDate: '',
        coordinates: '',
        magnitude: '',
    });

    const [search, setSearch] = useState('');

    // Add a new event
    const handleAddEvent = () => {
        const updatedEvents = [
            ...events,
            { id: events.length + 1, ...newEvent },
        ];
        setEvents(updatedEvents);
        setNewEvent({ name: '', type: '', discoveryDate: '', coordinates: '', magnitude: '' });
    };

    // Filter events by search term
    const filteredEvents = events.filter(event =>
        event.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="events-container">
            <h1>Cosmic Events</h1>

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search events..."
                className="search-bar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Event List */}
            <div className="event-list">
                {filteredEvents.map(event => (
                    <div key={event.id} className="event-card">
                        <h3>{event.name}</h3>
                        <p>Type: {event.type}</p>
                        <p>Discovery Date: {event.discoveryDate}</p>
                        <p>Coordinates: {event.coordinates}</p>
                        <p>Magnitude: {event.magnitude}</p>
                    </div>
                ))}
            </div>

            {/* Add New Event */}
            <div className="add-event-form">
                <h2>Add New Event</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={newEvent.name}
                    onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Type"
                    value={newEvent.type}
                    onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
                />
                <input
                    type="date"
                    value={newEvent.discoveryDate}
                    onChange={(e) => setNewEvent({ ...newEvent, discoveryDate: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Coordinates"
                    value={newEvent.coordinates}
                    onChange={(e) => setNewEvent({ ...newEvent, coordinates: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Magnitude"
                    value={newEvent.magnitude}
                    onChange={(e) => setNewEvent({ ...newEvent, magnitude: e.target.value })}
                />
                <button onClick={handleAddEvent}>Add Event</button>
            </div>
        </div>
    );
};

export default Events;