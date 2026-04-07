import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Decision() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <div className="text-center mt-5">No Decision Data Found.</div>;

  const isApproved = state.decision === 'Approved';

  return (
    <div className="container mt-5 p-5 shadow rounded bg-white text-center" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4">Credit Decision</h2>
      
      <div className={`display-4 fw-bold mb-3 ${isApproved ? 'text-success' : 'text-danger'}`}>
        {state.decision}
      </div>

      <div className="card bg-light mb-4">
        <div className="card-body">
          <h5 className="card-title text-muted">Credit Score</h5>
          <h2 className="fw-bold">{state.score}</h2>
        </div>
      </div>

      <div className="text-start mb-4">
        <p className="fw-bold mb-1">Reason(s):</p>
        <ul className="text-muted">
          {state.reasons.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      </div>

      <button onClick={() => navigate('/user')} className="btn btn-outline-secondary w-100">Start Over</button>
    </div>
  );
}

export default Decision;