import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Decision() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <div className="text-center mt-5">No Data</div>;

  return (
 
 <div className="container mt-5 p-5 shadow rounded bg-white text-center" style={{ maxWidth: '500px' }}>
 
      <h2 className="mb-4">Result</h2>
 
      <h1 className={`display-4 fw-bold ${state.decision === 'Approved' ? 'text-success' : 'text-danger'}`}>
        {state.decision}
      </h1>
 
      <div className="my-4">
        <p className="text-muted mb-1">Score</p>
        <h3>{state.score}</h3>
      </div>
 
      <div className="text-start mb-4 bg-light p-3 rounded">
        <strong>Reasons:</strong>
        <ul className="mb-0">
          {state.reasons.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      </div>
 
      <button onClick={() => navigate('/')} className="btn btn-outline-primary w-100">Home</button>
 
    </div>
  );
}
export default Decision;