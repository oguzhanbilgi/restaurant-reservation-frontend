import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/ReservationForm.css';

const ReservationForm = ({ token }) => {
    const [form, setForm] = useState({
        date: '',
        time: '',
        name: '',
        phone: '',
        numberOfPeople: '',
        email: '',
        details: ''
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/reservations', {
                date: form.date,
                startTime: form.time,
                tableNumber: form.numberOfPeople,
                details: form.details
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            setMessage('✅ Rezervasyon başarıyla oluşturuldu!');
            setTimeout(() => {
                navigate('/reservations');
            }, 2000);
        } catch (error) {
            setMessage('❌ Hata: ' + (error.response?.data || 'Bir hata oluştu'));
        }
    };

    return (
        <div className="reservation-container">
            <div className="reservation-header">
                <h1>Rezervasyon Oluşturun</h1>
                <div className="breadcrumb">
                    <a href="/">Anasayfa</a> / <span>Rezervasyon</span>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="reservation-form">
                <div className="form-row">
                    <div className="form-group">
                        <label>Tarih <span className="required">*</span></label>
                        <input
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Saat <span className="required">*</span></label>
                        <input
                            type="time"
                            name="time"
                            value={form.time}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Ad Soyad <span className="required">*</span></label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Adınız Soyadınız"
                            required
                        />
                        <small>Lütfen adınızı ve soyadınızı doğru bir şekilde giriniz!</small>
                    </div>
                    <div className="form-group">
                        <label>Telefon Numarası <span className="required">*</span></label>
                        <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="0531 324 51 98"
                            required
                        />
                        <small>Lütfen telefon numaranızı doğru bir şekilde giriniz!</small>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Kişi Sayısı <span className="required">*</span></label>
                        <input
                            type="number"
                            name="numberOfPeople"
                            value={form.numberOfPeople}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                        <small>Lütfen kişi sayısını doğru bir şekilde giriniz!</small>
                    </div>
                    <div className="form-group">
                        <label>Mail <span className="required">*</span></label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                        <small>Lütfen mail adresinizi doğru bir şekilde giriniz!</small>
                    </div>
                </div>

                <div className="form-group full-width">
                    <label>Detay <span className="required">*</span></label>
                    <textarea
                        name="details"
                        value={form.details}
                        onChange={handleChange}
                        className="form-control"
                        rows="4"
                        required
                    />
                </div>

                {message && <div className="alert">{message}</div>}

                <button type="submit" className="submit-button">
                    Gönder
                </button>
            </form>
        </div>
    );
};

export default ReservationForm; 