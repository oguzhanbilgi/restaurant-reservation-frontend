import React, { useEffect, useState } from "react";
import axios from "axios";

function Reservations({ token }) {
  const [reservations, setReservations] = useState([]);
  const [form, setForm] = useState({ date: "", startTime: "", tableNumber: "" });
  const [message, setMessage] = useState("");

  // Masa numaraları için array oluştur
  const tables = Array.from({ length: 15 }, (_, i) => i + 1);

  useEffect(() => {
    if (!token) return;
    axios.get("http://localhost:8080/api/reservations", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setReservations(res.data))
      .catch(err => setMessage("Rezervasyonlar alınamadı"));
  }, [token]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/reservations", form, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        setReservations([...reservations, res.data]);
        setMessage("Rezervasyon eklendi!");
      })
      .catch(err => setMessage("Ekleme başarısız: " + (err.response?.data || "Bilinmeyen hata")));
  };

  const handleDelete = id => {
    axios.delete(`http://localhost:8080/api/reservations/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(() => {
        setReservations(reservations.filter(r => r.id !== id));
        setMessage("Rezervasyon silindi!");
      })
      .catch(err => setMessage("Silme başarısız: " + (err.response?.data || "Bilinmeyen hata")));
  };

  return (
    <div className="container" style={{ maxWidth: 600 }}>
      <h2 className="mb-4">Rezervasyonlarım</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row g-2">
          <div className="col">
            <input name="date" type="date" className="form-control" onChange={handleChange} required />
          </div>
          <div className="col">
            <input name="startTime" type="time" className="form-control" onChange={handleChange} required />
          </div>
          <div className="col">
            <select
              name="tableNumber"
              className="form-control"
              onChange={handleChange}
              required
              value={form.tableNumber}
            >
              <option value="">Masa seçin</option>
              {tables.map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <div className="col">
            <button className="btn btn-primary w-100" type="submit">Ekle</button>
          </div>
        </div>
      </form>
      {message && <div className="alert alert-info">{message}</div>}
      <ul className="list-group">
        {reservations.map(r => (
          <li key={r.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>
              {r.date} -
              {r.timeSlot ? new Date(r.timeSlot.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ""} -
              Masa: {r.tableNumber}
            </span>
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(r.id)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reservations;