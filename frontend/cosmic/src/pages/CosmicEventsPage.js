import React, { useState } from 'react';
import CosmicEventList from '../components/CosmicEventList';

const CosmicEventsPage = () => {
    const [observerName, setObserverName] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        const name = event.target.elements.observerName.value;
        setObserverName(name);
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    name="observerName"
                    placeholder="Enter observer name"
                />
                <button type="submit">Search</button>
            </form>
            <CosmicEventList observerName={observerName} />
        </div>
    );
};

export default CosmicEventsPage;