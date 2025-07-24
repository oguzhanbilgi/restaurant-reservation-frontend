import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/ReservationForm.css';

function Reservations({ token }) {
  const [reservations, setReservations] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;
    axios.get("http://localhost:8080/api/reservations", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setReservations(res.data))
      .catch(err => setMessage("Rezervasyonlar alınamadı"))
      .finally(() => setLoading(false));
  }, [token]);

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
    <div className="reservation-container" style={{ maxWidth: 800, margin: '2rem auto' }}>
      <div className="reservation-header">
        <h1>Rezervasyonlarım</h1>
        <div className="breadcrumb">
          <a href="/">Anasayfa</a> / <span>Rezervasyonlarım</span>
        </div>
      </div>
      {loading ? (
        <div className="text-center mt-5">Yükleniyor...</div>
      ) : reservations.length === 0 ? (
        <div className="empty-message">
          <img src="/images/empty-reservation.svg" alt="Boş" style={{width:120, opacity:0.7}}/>
          <p>Henüz hiç rezervasyonunuz yok.</p>
        </div>
      ) : (
        <div className="reservation-list">
          {reservations.map(r => (
            <div key={r.id} className="reservation-card">
              <div className="reservation-info">
                <div><b>Tarih:</b> {r.date}</div>
                <div><b>Saat:</b> {r.timeSlot ? new Date(r.timeSlot.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "-"}</div>
                <div><b>Masa:</b> {r.tableNumber}</div>
                <div><b>Durum:</b> <span className={`badge badge-${r.status === 'CONFIRMED' ? 'success' : r.status === 'CANCELLED' ? 'danger' : 'warning'}`}>{r.status === 'CONFIRMED' ? 'Onaylandı' : r.status === 'CANCELLED' ? 'İptal' : 'Beklemede'}</span></div>
              </div>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(r.id)}>Sil</button>
            </div>
          ))}
        </div>
      )}
      {message && <div className="alert alert-info mt-3">{message}</div>}
    </div>
  );
}

export default Reservations;