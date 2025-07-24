import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Reservations from './components/Reservations';
import AdminPanel from './components/AdminPanel';
import ForgotPassword from './components/ForgotPassword';
import ReservationForm from './components/ReservationForm';
import Footer from './components/Footer';
import { jwtDecode } from 'jwt-decode';
import './App.css';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLogin = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  // Kullanıcı rolünü bul
  let role = null;
  if (token) {
    try {
      const decoded = jwtDecode(token);
      role = decoded.role;
    } catch (e) {
      role = null;
    }
  }

  return (
    <Router>
      <div className="app">
        <Navbar token={token} onLogout={handleLogout} />
        <main className="main-content">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Protected Routes */}
            <Route 
              path="/reservations" 
              element={
                token ? <Reservations token={token} /> : <Navigate to="/login" />
              }
            />
            <Route 
              path="/reservation" 
              element={
                token ? <ReservationForm token={token} /> : <Navigate to="/login" />
              }
            />
            <Route 
              path="/create-reservation" 
              element={
                token ? <ReservationForm token={token} /> : <Navigate to="/login" />
              }
            />
            <Route 
              path="/admin" 
              element={
                token && role === 'ADMIN' ? <AdminPanel token={token} /> : <Navigate to="/" />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;