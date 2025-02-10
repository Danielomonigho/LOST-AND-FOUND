import React from 'react';
import './App.css';
import Frame6 from './component/Frame6'; // Correct import for Frame6
import Frame7 from './component/frame7'; // Correct import for Frame7
import Frame8 from './component/frame8'; // Correct import for Frame8 (ensure proper casing for the file name)
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import RegisterPage from './component/RegisterPage'; // Correct import for RegisterPage
import ReportLostPage from './component/ReportLostPage'; // Import the new ReportLostPage component
import ReportFoundPage from './component/ReportFoundPage'; // Import ReportFoundPage

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define routes for navigation */}
        <Routes>
          {/* Home route renders Frame6 */}
          <Route path="/" element={<Frame6 />} />

          {/* About route renders Frame7 */}
          <Route path="/about" element={<Frame7 />} />

          {/* Profile route renders Frame8 */}
          <Route path="/profile" element={<Frame8 />} />

          {/* Sign in route renders RegisterPage */}
          <Route path="/signin" element={<RegisterPage />} />

          {/* Report Lost Item route */}
          <Route path="/lost" element={<ReportLostPage />} />

          {/* Report Found Item route */}
          <Route path="/found" element={<ReportFoundPage />} /> {/* Added the route for ReportFoundPage */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;