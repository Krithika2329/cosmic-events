import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SpectralAnalysisList = () => {
    const [analyses, setAnalyses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/spectral-analyses')
            .then(response => {
                setAnalyses(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the spectral analyses!', error);
            });
    }, []);

    return (
        <div>
            <h1>Spectral Analyses</h1>
            <ul>
                {analyses.map(analysis => (
                    <li key={analysis.SpectrumID}>{analysis.WavelengthRange}</li>
                ))}
            </ul>
        </div>
    );
};

export default SpectralAnalysisList;