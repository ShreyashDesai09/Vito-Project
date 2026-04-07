import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Loan() {
  const [loan, setLoan] = useState({ amount: '', purpose: '', tenure: '12' });
  const navigate = useNavigate();

  const handleApply = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId');
    const rev = localStorage.getItem('tempRev');

    const dResp = await fetch('http://localhost:4000/decision', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ monthlyRevenue: rev, loanAmount: loan.amount })
    });
    const dRes = await dResp.json();

    await fetch('http://localhost:4000/loan/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, ...loan, status: dRes.data.decision, score: dRes.data.score })
    });

    navigate('/decision', { state: dRes.data });
  };

  return (
    <div className="container mt-5 p-5 " style={{ maxWidth: '500px' }}>
      
      <h2 className="text-center mb-4">Loan Details</h2>
      
      <form onSubmit={handleApply}>
      
        <div className="form-floating mb-3">
          <input type="number" className="form-control" onChange={e => setLoan({...loan, amount: e.target.value})} required />
          <label>AMOUNT</label>
        </div>
      
        <div className="form-floating mb-3">
          <input type="text" className="form-control" onChange={e => setLoan({...loan, purpose: e.target.value})} required />
          <label>PURPOSE</label>
        </div>
      
        <select className="form-select mb-4" onChange={e => setLoan({...loan, tenure: e.target.value})}>
          <option value="12">12 Months</option>
          <option value="24">24 Months</option>
          <option value="36">36 Months</option>
        </select>
      
        <button className="btn btn-success w-100 py-2 fw-bold">SUBMIT APPLICATION</button>
      
      </form>
    
    </div>
  );
}
export default Loan;