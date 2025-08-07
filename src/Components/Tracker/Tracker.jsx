import React, { useState } from 'react'
import { db } from '../../firebaseConfig.js';
import { ref, push } from 'firebase/database';
import './Tracker.css';

const Tracker = () => {
  const [workout, setWorkout] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [entries, setEntries] = useState([]);
  const [success, setSuccess] = useState('');

  // Get user email from localStorage (set on login)
  const userEmail = localStorage.getItem('userEmail');
  const encodeEmail = (email) => email ? email.replace(/\./g, ',') : null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!workout || !sets || !reps) return;
    const time = new Date().toLocaleString();
    const entry = { workout, sets, reps, time };
    setEntries([entry, ...entries]);
    setWorkout('');
    setSets('');
    setReps('');
    setSuccess('Workout added!');
    setTimeout(() => setSuccess(''), 1200);

    // Save to Firebase if user is logged in
    if (userEmail) {
      const userRef = ref(db, `tracker/${encodeEmail(userEmail)}`);
      await push(userRef, entry);
    }
  };

  return (
    <div className="tracker-container">
      <h1 className="tracker-title">Workout Tracker</h1>
      <form className="tracker-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Workout Name"
          value={workout}
          onChange={e => setWorkout(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Sets"
          value={sets}
          onChange={e => setSets(e.target.value)}
          min="1"
          required
        />
        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={e => setReps(e.target.value)}
          min="1"
          required
        />
        <button type="submit">Add Workout</button>
        {success && <div style={{color:'#3182ce',textAlign:'center'}}>{success}</div>}
      </form>
      <ul className="tracker-list">
        {entries.map((entry, idx) => (
          <li key={idx}>
            <span className="workout-name">{entry.workout}</span>
            <span className="workout-meta">{entry.sets} sets x {entry.reps} reps</span>
            <span className="workout-time">Logged: {entry.time}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tracker
