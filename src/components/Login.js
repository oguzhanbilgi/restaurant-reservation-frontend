import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const Login = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            // API çağrısı burada yapılacak
            const response = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Giriş başarısız. Lütfen bilgilerinizi kontrol edin.');
            }

            const data = await response.json();
            onLogin(data.token);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-header">
                    <h2>Hoş Geldiniz</h2>
                    <p>Lütfen hesabınıza giriş yapın</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">E-posta</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Şifre</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button type="submit" className="auth-btn">
                        Giriş Yap
                    </button>

                    <div className="auth-links">
                        <Link to="/forgot-password">Şifremi Unuttum</Link>
                    </div>

                    <div className="auth-divider">
                        <span>veya</span>
                    </div>

                    <div className="auth-links">
                        Hesabınız yok mu? <Link to="/register">Kayıt Olun</Link>
                    </div>

                    <div className="social-login">
                        <button type="button" className="social-btn">
                            <i className="fab fa-google"></i>
                            Google
                        </button>
                        <button type="button" className="social-btn">
                            <i className="fab fa-facebook-f"></i>
                            Facebook
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;