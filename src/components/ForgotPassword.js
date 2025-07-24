import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [form, setForm] = useState({ email: "", newPassword: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/users/forgot-password", form);
      setMessage("✅ Şifreniz başarıyla değiştirildi!");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setMessage("❌ Hata: " + (err.response?.data || "Bilinmeyen hata"));
    }
  };

  return (
    <div className="container" style={{ maxWidth: 400 }}>
      <h2 className="mb-4">Şifremi Unuttum</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="E-posta"
          className="form-control mb-2"
          onChange={handleChange}
          required
        />
        <input
          name="newPassword"
          type="password"
          placeholder="Yeni Şifre"
          className="form-control mb-2"
          onChange={handleChange}
          required
        />
        <button className="btn btn-primary w-100" type="submit">
          Şifremi Sıfırla
        </button>
      </form>
      <div className="mt-3">{message}</div>
    </div>
  );
}

export default ForgotPassword;