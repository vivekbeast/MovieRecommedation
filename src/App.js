import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import ShowDetails from './Pages/ShowDetails';
import LandingPage from './Components/landingPage';

function App() {
  return (
    <div className="App-header">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shows/:id" element={<ShowDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
