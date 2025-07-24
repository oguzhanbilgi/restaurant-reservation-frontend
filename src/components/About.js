import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Boğaz'da Eşsiz Bir Lezzet Deneyimi</h1>
                    <p className="hero-subtitle">İstanbul'un en güzel manzarasında unutulmaz tatlar</p>
                    <Link to="/create-reservation" className="btn btn-primary">
                        Rezervasyon Yap
                        <i className="fas fa-arrow-right ms-2"></i>
                    </Link>
                </div>
                <div className="hero-overlay"></div>
            </section>

            {/* About Section */}
            <section className="section about">
                <div className="container">
                    <div className="section-title">
                        <h2>Hakkımızda</h2>
                        <p>2010'dan beri sizlere hizmet vermenin gururunu yaşıyoruz</p>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="about-content">
                                <p className="lead mb-4">2010 yılından beri İstanbul Boğazı'nın eşsiz manzarası eşliğinde misafirlerimize unutulmaz bir deneyim sunuyoruz.</p>
                                <p>Modern ve geleneksel lezzetleri harmanlayan menümüz, profesyonel servis anlayışımız ve özenle seçilmiş malzemelerimizle gastronomi tutkunlarının vazgeçilmez adresi olduk.</p>
                                <p>Restoranımızda her detay, misafirlerimizin konforunu ve memnuniyetini en üst düzeyde tutmak için özenle düşünülmüştür. Deneyimli şeflerimiz, mevsimsel malzemelerle hazırladıkları özel tariflerle damaklarınızda unutulmaz tatlar bırakacak.</p>
                                <div className="mt-4">
                                    <Link to="/menu" className="btn btn-outline me-3">
                                        Menüyü İncele
                                    </Link>
                                    <Link to="/contact" className="btn btn-primary">
                                        İletişime Geç
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="about-image">
                                <img src="/images/restaurant-interior.jpg" alt="Restoran İç Mekan" className="img-fluid rounded shadow" />
                                <div className="about-experience">
                                    <span className="number">13</span>
                                    <span className="text">Yıllık<br/>Deneyim</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="row features mt-5">
                        <div className="col-md-4">
                            <div className="feature-item">
                                <i className="fas fa-utensils"></i>
                                <h3>Özel Menü</h3>
                                <p>Şeflerimizin özenle hazırladığı benzersiz lezzetler</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-item">
                                <i className="fas fa-wine-glass-alt"></i>
                                <h3>Özel Etkinlikler</h3>
                                <p>Unutulmaz anlarınız için özel organizasyonlar</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-item">
                                <i className="fas fa-map-marked-alt"></i>
                                <h3>Eşsiz Manzara</h3>
                                <p>Boğaz'ın muhteşem manzarası eşliğinde yemek keyfi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About; 