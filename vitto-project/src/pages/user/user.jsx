import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function User() {
  const [data, setData] = useState({ name: '', pan: '', businessType: '', monthlyRevenue: '' });
  const navigate = useNavigate();

  const handleNext = async (e) => {
    e.preventDefault();
    const resp = await fetch('http://localhost:4000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const res = await resp.json();
    if (res.status === 'success') {
      localStorage.setItem('userId', res.data.userId);
      localStorage.setItem('tempRev', data.monthlyRevenue);
      navigate('/loan');
    }
  };

  return (
    <div className="container mt-5 p-5 " style={{ maxWidth: '500px' }}>
      
      <h2 className="text-center mb-4">Business Profile</h2>
      
      <form onSubmit={handleNext}>
       
        <div className="form-floating mb-3">
          <input type="text" className="form-control" onChange={e => setData({...data, name: e.target.value})} required />
          <label>NAME</label>
        </div>
       
        <div className="form-floating mb-3">
          <input type="text" className="form-control" onChange={e => setData({...data, pan: e.target.value})} required />
          <label>PAN</label>
        </div>
      
        <select className="form-select mb-3" onChange={e => setData({...data, businessType: e.target.value})} required>
          <option value="">Business Type</option>
          <option value="Retail">Retail</option>
          <option value="Manufacturing">Manufacturing</option>
          <option value="Services">Services</option>
        </select>
      
        <div className="form-floating mb-3">
          <input type="number" className="form-control" onChange={e => setData({...data, monthlyRevenue: e.target.value})} required />
          <label>MONTHLY REVENUE</label>
        </div>
      
        <button className="btn btn-primary w-100 py-2 fw-bold">NEXT</button>
      
      </form>
    
    </div>
  );
}
export default User;