import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPanel = ({ token }) => {
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState({
        date: '',
        tableNumber: '',
        status: ''
    });

    useEffect(() => {
        fetchReservations();
    }, []);

    const fetchReservations = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/admin/reservations', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setReservations(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Rezervasyonlar yüklenirken hata:', error);
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Bu rezervasyonu silmek istediğinizden emin misiniz?')) {
            try {
                await axios.delete(`http://localhost:8080/api/admin/reservations/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                fetchReservations(); // Listeyi yenile
                alert('Rezervasyon başarıyla silindi!');
            } catch (error) {
                console.error('Silme hatası:', error);
                alert('Rezervasyon silinirken hata oluştu!');
            }
        }
    };

    const handleEdit = (reservation) => {
        setEditingId(reservation.id);
        setEditForm({
            date: reservation.date,
            tableNumber: reservation.tableNumber,
            status: reservation.status
        });
    };

    const handleUpdate = async (id) => {
        try {
            await axios.put(`http://localhost:8080/api/admin/reservations/${id}`, editForm, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            setEditingId(null);
            fetchReservations(); // Listeyi yenile
            alert('Rezervasyon başarıyla güncellendi!');
        } catch (error) {
            console.error('Güncelleme hatası:', error);
            alert('Rezervasyon güncellenirken hata oluştu!');
        }
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setEditForm({ date: '', tableNumber: '', status: '' });
    };

    if (loading) {
        return <div className="text-center mt-5">Yükleniyor...</div>;
    }

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Admin Paneli - Tüm Rezervasyonlar</h2>
            
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Kullanıcı</th>
                            <th>Tarih</th>
                            <th>Masa No</th>
                            <th>Saat</th>
                            <th>Durum</th>
                            <th>İşlemler</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.map((reservation) => (
                            <tr key={reservation.id}>
                                <td>{reservation.id}</td>
                                <td>{reservation.user?.email || 'N/A'}</td>
                                <td>
                                    {editingId === reservation.id ? (
                                        <input
                                            type="date"
                                            className="form-control"
                                            value={editForm.date}
                                            onChange={(e) => setEditForm({...editForm, date: e.target.value})}
                                        />
                                    ) : (
                                        reservation.date
                                    )}
                                </td>
                                <td>
                                    {editingId === reservation.id ? (
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={editForm.tableNumber}
                                            onChange={(e) => setEditForm({...editForm, tableNumber: e.target.value})}
                                        />
                                    ) : (
                                        reservation.tableNumber
                                    )}
                                </td>
                                <td>
                                    {reservation.timeSlot?.startTime ? 
                                        `${reservation.timeSlot.startTime.substring(11, 16)} - ${reservation.timeSlot.endTime.substring(11, 16)}` 
                                        : 'N/A'
                                    }
                                </td>
                                <td>
                                    {editingId === reservation.id ? (
                                        <select
                                            className="form-control"
                                            value={editForm.status}
                                            onChange={(e) => setEditForm({...editForm, status: e.target.value})}
                                        >
                                            <option value="PENDING">Beklemede</option>
                                            <option value="CONFIRMED">Onaylandı</option>
                                            <option value="CANCELLED">İptal Edildi</option>
                                        </select>
                                    ) : (
                                        <span className={`badge ${
                                            reservation.status === 'CONFIRMED' ? 'bg-success' :
                                            reservation.status === 'CANCELLED' ? 'bg-danger' : 'bg-warning'
                                        }`}>
                                            {reservation.status === 'CONFIRMED' ? 'Onaylandı' :
                                             reservation.status === 'CANCELLED' ? 'İptal Edildi' : 'Beklemede'}
                                        </span>
                                    )}
                                </td>
                                <td>
                                    {editingId === reservation.id ? (
                                        <div>
                                            <button 
                                                className="btn btn-success btn-sm me-2"
                                                onClick={() => handleUpdate(reservation.id)}
                                            >
                                                Kaydet
                                            </button>
                                            <button 
                                                className="btn btn-secondary btn-sm"
                                                onClick={handleCancelEdit}
                                            >
                                                İptal
                                            </button>
                                        </div>
                                    ) : (
                                        <div>
                                            <button 
                                                className="btn btn-warning btn-sm me-2"
                                                onClick={() => handleEdit(reservation)}
                                            >
                                                Düzenle
                                            </button>
                                            <button 
                                                className="btn btn-danger btn-sm"
                                                onClick={() => handleDelete(reservation.id)}
                                            >
                                                Sil
                                            </button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            {reservations.length === 0 && (
                <div className="text-center mt-4">
                    <p>Henüz rezervasyon bulunmuyor.</p>
                </div>
            )}
        </div>
    );
};

export default AdminPanel; 