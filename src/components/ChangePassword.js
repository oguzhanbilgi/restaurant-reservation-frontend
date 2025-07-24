import React, { useState } from "react";
import axios from "axios";

function ChangePassword({ token }) {
  const [form, setForm] = useState({ oldPassword: "", newPassword: "" });
  const [message, setMessage] = useState("");

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/user/change-password", form, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(() => setMessage("Şifre değiştirildi!"))
      .catch(() => setMessage("Şifre değiştirilemedi!"));
  };

  return (
    <div className="container">
      <h2>Şifre Değiştir</h2>
      <form onSubmit={handleSubmit}>
        <input name="oldPassword" type="password" className="form-control mb-2" placeholder="Eski Şifre" onChange={handleChange} required />
        <input name="newPassword" type="password" className="form-control mb-2" placeholder="Yeni Şifre" onChange={handleChange} required />
        <button className="btn btn-warning" type="submit">Değiştir</button>
      </form>
      <div>{message}</div>
    </div>
  );
}

export default ChangePassword;