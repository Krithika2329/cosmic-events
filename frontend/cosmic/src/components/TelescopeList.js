import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TelescopeList = () => {
    const [telescopes, setTelescopes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/telescopes')
            .then(response => {
                setTelescopes(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the telescopes!', error);
            });
    }, []);

    return (
        <div>
            <h1>Telescopes</h1>
            <ul>
                {telescopes.map(telescope => (
                    <li key={telescope.InstrumentID}>{telescope.Name}</li>
                ))}
            </ul>
        </div>
    );
};

export default TelescopeList;