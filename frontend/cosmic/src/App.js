import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ObserversPage from './pages/ObserversPage';
import CosmicEventsPage from './pages/CosmicEventsPage';
import ObservationSessionsPage from './pages/ObservationSessionsPage';
import TelescopesPage from './pages/TelescopesPage';
import DataRecordsPage from './pages/DataRecordsPage';
import EventClassificationsPage from './pages/EventClassificationsPage';
import ResearchPapersPage from './pages/ResearchPapersPage';
import AlertsDiscoveriesPage from './pages/AlertsDiscoveriesPage';
import SpectralAnalysesPage from './pages/SpectralAnalysesPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/observers" element={<ObserversPage />} />
                <Route path="/events" element={<CosmicEventsPage />} />
                <Route path="/observation-sessions" element={<ObservationSessionsPage />} />
                <Route path="/telescopes" element={<TelescopesPage />} />
                <Route path="/data-records" element={<DataRecordsPage />} />
                <Route path="/event-classifications" element={<EventClassificationsPage />} />
                <Route path="/research-papers" element={<ResearchPapersPage />} />
                <Route path="/alerts-discoveries" element={<AlertsDiscoveriesPage />} />
                <Route path="/spectral-analyses" element={<SpectralAnalysesPage />} />
            </Routes>
        </Router>
    );
}

export default App;