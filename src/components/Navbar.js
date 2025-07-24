import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import '../styles/Navbar.css';

const Navbar = ({ token, onLogout }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const isAdmin = token ? jwtDecode(token).role === 'ADMIN' : false;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <Link className="navbar-brand" to="/">Boğaz Restaurant</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Ana Sayfa</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">Hakkımızda</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/menu">Menü</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/gallery">Galeri</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">İletişim</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        {token ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/reservations">Rezervasyonlarım</Link>
                                </li>
                                {isAdmin && (
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/admin">Admin Paneli</Link>
                                    </li>
                                )}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/" onClick={onLogout}>Çıkış</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Giriş</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Kayıt</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 