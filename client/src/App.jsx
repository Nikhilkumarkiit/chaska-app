import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Admin from './components/Admin';

const LandingPage = () => (
  <>
    <Navbar />
    <Hero />
    <div id="order-section" className="container" style={{ padding: '40px 20px' }}>
      <OrderForm />
    </div>
    <Address />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
