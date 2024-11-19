import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import ContactPage from './pages/ContactPage'; // Import the ContactPage component

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Link to navigate to ContactPage */}
        <nav>
          <Link to="/contact">Go to Contact Page</Link>
        </nav>
        <Routes>
          {/* Define the route path for ContactPage */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
