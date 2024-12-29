const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

// Import routes
const observerRoutes = require('./routes/observerRoutes');
const eventRoutes = require('./routes/cosmicEventRoutes');
const observationSessionRoutes = require('./routes/observationSessionRoutes');
const telescopeRoutes = require('./routes/telescopeRoutes');
const dataRecordRoutes = require('./routes/dataRecordRoutes');
const eventClassificationRoutes = require('./routes/EventClassificationRoutes');
const researchPaperRoutes = require('./routes/ResearchPaperRoutes');
const alertsDiscoveriesRoutes = require('./routes/AlertDiscoveriesRoutes');
const spectralAnalysisRoutes = require('./routes/SpectralAnalysisRoutes');

// Use routes
app.use('/observers', observerRoutes);
app.use('/events', eventRoutes);
app.use('/observation-sessions', observationSessionRoutes);
app.use('/telescopes', telescopeRoutes);
app.use('/data-records', dataRecordRoutes);
app.use('/event-classifications', eventClassificationRoutes);
app.use('/research-papers', researchPaperRoutes);
app.use('/alerts-discoveries', alertsDiscoveriesRoutes);
app.use('/spectral-analyses', spectralAnalysisRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});