import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResearchPaperList = () => {
    const [papers, setPapers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/research-papers')
            .then(response => {
                setPapers(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the research papers!', error);
            });
    }, []);

    return (
        <div>
            <h1>Research Papers</h1>
            <ul>
                {papers.map(paper => (
                    <li key={paper.PaperID}>{paper.Title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ResearchPaperList;