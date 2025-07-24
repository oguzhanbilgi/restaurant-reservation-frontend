import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile({ token }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!token) return;
    axios.get("http://localhost:8080/api/user/me", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setUser(res.data));
  }, [token]);

  if (!user) return <div>Yükleniyor...</div>;

  return (
    <div className="container">
      <h2>Profilim</h2>
      <p><b>Ad:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
    </div>
  );
}

export default Profile;