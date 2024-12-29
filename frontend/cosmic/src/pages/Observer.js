import React, { useState } from 'react';
//import './Observers.css';

const Observers = () => {
    const [observers, setObservers] = useState([
        {
            id: 1,
            name: "Dr. Jane Doe",
            affiliation: "NASA",
            location: "37.7749° N, 122.4194° W",
            contact: "jane.doe@nasa.gov",
            equipment: "Hubble Space Telescope",
        },
        {
            id: 2,
            name: "Mr. John Smith",
            affiliation: "ESA",
            location: "48.8566° N, 2.3522° E",
            contact: "john.smith@esa.int",
            equipment: "James Webb Space Telescope",
        },
    ]);

    return (
        <div className="observers-container">
            <h1>Observers</h1>
            <div className="observer-list">
                {observers.map(observer => (
                    <div key={observer.id} className="observer-card">
                        <h3>{observer.name}</h3>
                        <p>Affiliation: {observer.affiliation}</p>
                        <p>Location: {observer.location}</p>
                        <p>Contact: {observer.contact}</p>
                        <p>Equipment: {observer.equipment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Observers;