import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('✅ Mesajınız başarıyla gönderildi!');
        setForm({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section className="contact-section">
            <div className="container">
                <div className="section-title">
                    <h2>İletişim</h2>
                    <p>Bizimle iletişime geçin</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="info-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <h3>Adres</h3>
                            <p>Kuruçeşme Cad. No:123<br />Beşiktaş/İstanbul</p>
                        </div>

                        <div className="info-item">
                            <i className="fas fa-phone"></i>
                            <h3>Telefon</h3>
                            <p>+90 212 123 45 67<br />+90 532 987 65 43</p>
                        </div>

                        <div className="info-item">
                            <i className="fas fa-envelope"></i>
                            <h3>Email</h3>
                            <p>info@bogazrestaurant.com<br />rezervasyon@bogazrestaurant.com</p>
                        </div>

                        <div className="info-item">
                            <i className="fas fa-clock"></i>
                            <h3>Çalışma Saatleri</h3>
                            <p>Pazartesi - Pazar<br />09:00 - 23:00</p>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Adınız Soyadınız"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Email Adresiniz"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    placeholder="Konu"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Mesajınız"
                                    required
                                    rows="5"
                                ></textarea>
                            </div>

                            {status && <div className="form-status">{status}</div>}

                            <button type="submit" className="submit-button">
                                Gönder
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.1375487392856!2d29.0321773!3d41.0482403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAyJzUzLjciTiAyOcKwMDEnNTUuOCJF!5e0!3m2!1str!2str!4v1635000000000!5m2!1str!2str"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Boğaz Restaurant Konum"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact; 