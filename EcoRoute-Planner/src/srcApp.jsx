import React, { useState } from 'react';

function App() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>EcoRoute Planner</h1>
      <p style={{ color: '#27ae60' }}>Find the most sustainable route</p>
      <input placeholder="From" value={from} onChange={e => setFrom(e.target.value)}
             style={{ padding: '12, width:'45%' }} />
      <input placeholder="To" value={to} onChange={e => setTo(e.target.value)}
             style={{ padding:12, width:'45%', marginLeft:10 }} />
      <br/><br/>
      <button style={{ padding:'14px 30px', background:'#27ae60', color:'white', border:'none' }}>
        Search Green Route
      </button>

      <div style={{ marginTop:40, padding:20, background:'#f0fff0', border:'2px solid #27ae60', borderRadius:10 }}>
        <h3>Demo Result</h3>
        <p>Car → 5.2 kg CO₂</p>
        <p>Bike + Train → 0.8 kg CO₂</p>
        <p style={{ color:'#27ae60', fontWeight:'bold' }}>
          You save 4.4 kg CO₂ → Gold Eco-Badge earned!
        </p>
      </div>
    </div>
  );
}

export default App;