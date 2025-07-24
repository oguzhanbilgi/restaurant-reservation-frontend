import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

const Login = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const errorData = await response.text();
                let errorMessage;
                try {
                    const errorJson = JSON.parse(errorData);
                    errorMessage = errorJson.error || 'Giriş başarısız';
                } catch (e) {
                    errorMessage = 'Giriş başarısız. Lütfen bilgilerinizi kontrol edin.';
                }
                throw new Error(errorMessage);
            }

            const data = await response.json();
            
            // Token'ı ve kullanıcı bilgilerini kaydet
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            
            onLogin(data.token);

            // Kullanıcı rolüne göre yönlendirme
            if (data.user && data.user.role === 'ADMIN') {
                navigate('/admin');
            } else {
                navigate('/reservations');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError(err.message || 'Giriş yapılırken bir hata oluştu.');
        } finally {
            setIsLoading(false);
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
                            disabled={isLoading}
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
                            disabled={isLoading}
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button type="submit" className="auth-btn" disabled={isLoading}>
                        {isLoading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
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
                </form>
            </div>
        </div>
    );
};

export default Login;