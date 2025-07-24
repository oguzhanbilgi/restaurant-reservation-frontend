import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    const features = [
        {
            id: 1,
            title: "Restoran İç Mekan",
            description: "Modern ve şık iç mekan tasarımı",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 2,
            title: "Özel Menü",
            description: "Şefimizin özel menüsünden seçmeler",
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 3,
            title: "Boğaz Manzarası",
            description: "Eşsiz İstanbul Boğazı manzarası",
            image: "https://images.unsplash.com/photo-1499142070637-c5f2e48c07c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 4,
            title: "Özel Etkinlik",
            description: "Unutulmaz anlar için özel etkinlikler",
            image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 5,
            title: "Deniz Ürünleri",
            description: "Taze deniz ürünleri",
            image: "https://images.unsplash.com/photo-1599051372137-6315d4c75bf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 6,
            title: "VIP Salon",
            description: "Özel davetler için VIP salon",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 7,
            title: "Gün Batımı",
            description: "Büyüleyici gün batımı manzarası",
            image: "https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 8,
            title: "Düğün Organizasyonu",
            description: "Özel gününüz için kusursuz organizasyon",
            image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 9,
            title: "Tatlılar",
            description: "El yapımı özel tatlılar",
            image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        }
    ];

    return (
        <div className="home">
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

            <section className="features-grid">
                <div className="container">
                    <div className="row">
                        {features.map((feature) => (
                            <div key={feature.id} className="col-md-4 mb-4">
                                <div className="feature-card">
                                    <img src={feature.image} alt={feature.title} className="feature-image" loading="lazy" />
                                    <div className="feature-content">
                                        <h3>{feature.title}</h3>
                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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