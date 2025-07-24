import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Boğaz'da Eşsiz Bir Lezzet Deneyimi</h1>
                    <p className="hero-subtitle">İstanbul'un en güzel manzarası eşliğinde unutulmaz anlar</p>
                    <Link to="/reservation" className="btn-reservation">
                        Rezervasyon Yap <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
                <div className="hero-overlay"></div>
            </section>

            {/* Welcome Section */}
            <section className="welcome-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="welcome-content">
                                <h2>Hoş Geldiniz</h2>
                                <p className="lead">2010'dan beri İstanbul Boğazı'nın eşsiz manzarası eşliğinde misafirlerimize unutulmaz bir deneyim sunuyoruz.</p>
                                <p>Modern ve geleneksel lezzetleri harmanlayan menümüz, profesyonel servis anlayışımız ve özenle seçilmiş malzemelerimizle gastronomi tutkunlarının vazgeçilmez adresi olduk.</p>
                                <Link to="/about" className="btn-learn-more">
                                    Daha Fazla Bilgi
                                    <i className="fas fa-chevron-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="welcome-image">
                                <img src="/images/restaurant-interior.jpg" alt="Restaurant Interior" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="feature-card">
                                <i className="fas fa-utensils"></i>
                                <h3>Özel Menü</h3>
                                <p>Şeflerimizin özenle hazırladığı benzersiz lezzetler</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-card">
                                <i className="fas fa-glass-cheers"></i>
                                <h3>Özel Etkinlikler</h3>
                                <p>Unutulmaz anlarınız için özel organizasyonlar</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-card">
                                <i className="fas fa-map-marked-alt"></i>
                                <h3>Eşsiz Manzara</h3>
                                <p>Boğaz'ın muhteşem manzarası eşliğinde yemek keyfi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Menu Preview Section */}
            <section className="menu-preview-section">
                <div className="container">
                    <h2>Öne Çıkan Lezzetlerimiz</h2>
                    <div className="menu-preview-grid">
                        <div className="menu-item">
                            <img src="/images/menu/dish1.jpg" alt="Special Dish 1" />
                            <div className="menu-item-content">
                                <h3>Izgara Levrek</h3>
                                <p>Mevsim sebzeleri ile</p>
                                <span className="price">220₺</span>
                            </div>
                        </div>
                        <div className="menu-item">
                            <img src="/images/menu/dish2.jpg" alt="Special Dish 2" />
                            <div className="menu-item-content">
                                <h3>Kuzu Tandır</h3>
                                <p>Özel baharatlarla marine edilmiş</p>
                                <span className="price">280₺</span>
                            </div>
                        </div>
                        <div className="menu-item">
                            <img src="/images/menu/dish3.jpg" alt="Special Dish 3" />
                            <div className="menu-item-content">
                                <h3>Künefe</h3>
                                <p>Antep fıstıklı özel künefe</p>
                                <span className="price">120₺</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-5">
                        <Link to="/menu" className="btn-view-menu">
                            Tüm Menüyü Görüntüle
                            <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Reservation CTA Section */}
            <section className="reservation-cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Özel Anlarınız İçin Rezervasyon Yapın</h2>
                        <p>Boğaz manzarası eşliğinde unutulmaz bir akşam yemeği için hemen rezervasyon yapın.</p>
                        <Link to="/reservation" className="btn-make-reservation">
                            Rezervasyon Yap
                            <i className="fas fa-calendar-alt"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home; 