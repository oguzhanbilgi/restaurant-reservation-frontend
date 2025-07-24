import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Boğaz Restaurant</h3>
                        <p>İstanbul Boğazı'nın eşsiz manzarası eşliğinde unutulmaz bir yemek deneyimi.</p>
                        <div className="social-links">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://wa.me/905321234567" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a href="https://google.com/maps" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-google"></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3>Hızlı Linkler</h3>
                        <ul>
                            <li><Link to="/about">Hakkımızda</Link></li>
                            <li><Link to="/menu">Menü</Link></li>
                            <li><Link to="/gallery">Galeri</Link></li>
                            <li><Link to="/contact">İletişim</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>İletişim</h3>
                        <ul className="contact-info">
                            <li>
                                <i className="fas fa-map-marker-alt"></i>
                                Kuruçeşme Cad. No:123, Beşiktaş/İstanbul
                            </li>
                            <li>
                                <i className="fas fa-phone"></i>
                                +90 212 123 45 67
                            </li>
                            <li>
                                <i className="fas fa-envelope"></i>
                                info@bogazrestaurant.com
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Çalışma Saatleri</h3>
                        <ul className="working-hours">
                            <li>
                                <span>Pazartesi - Cuma:</span>
                                09:00 - 23:00
                            </li>
                            <li>
                                <span>Cumartesi - Pazar:</span>
                                10:00 - 23:00
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p>&copy; 2024 Boğaz Restaurant. Tüm hakları saklıdır.</p>
                        <div className="footer-links">
                            <Link to="/privacy">Gizlilik Politikası</Link>
                            <Link to="/kvkk">KVKK</Link>
                            <Link to="/terms">Kullanım Koşulları</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 