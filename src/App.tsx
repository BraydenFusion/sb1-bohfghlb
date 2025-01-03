import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/Home';
import { LiveAgentsPage } from './pages/live-agents';
// ... other imports

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/live-agents" element={<LiveAgentsPage />} />
          {/* ... other routes */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;