import React, { useState, useEffect } from 'react'
import { db } from '../../firebaseConfig.js';
import { ref, push, onValue } from 'firebase/database';
import './Tracker.css';

const Tracker = () => {
  const [machine, setMachine] = useState('');
  const [setNum, setSetNum] = useState('');
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [entries, setEntries] = useState([]);
  const [success, setSuccess] = useState('');
  const [restDuration, setRestDuration] = useState(60); // seconds
  const [timer, setTimer] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  // Get user email from localStorage (set on login)
  const userEmail = localStorage.getItem('userEmail');
  const encodeEmail = (email) => email ? email.replace(/\./g, ',') : null;

  // Get today's date string in yyyy-mm-dd format
  const todayStr = new Date().toISOString().slice(0, 10);

  // Fetch user's workouts on mount and listen for changes
  useEffect(() => {
    if (!userEmail) return;
    const userRef = ref(db, `tracker/${encodeEmail(userEmail)}`);
    const unsubscribe = onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Only show entries from today
        const workouts = Object.values(data).filter(entry => {
          if (!entry.time) return false;
          const entryDate = new Date(entry.time);
          const entryDateStr = entryDate.toISOString().slice(0, 10);
          return entryDateStr === todayStr;
        }).sort((a, b) => new Date(b.time) - new Date(a.time));
        setEntries(workouts);
      } else {
        setEntries([]);
      }
    });
    return () => unsubscribe();
  }, [userEmail, todayStr]);

  // Timer effect
  useEffect(() => {
    let interval;
    if (timerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer(t => t - 1);
      }, 1000);
    } else if (timer === 0) {
      setTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [timerActive, timer]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!machine || !setNum || !weight || !reps) return;
    const time = new Date().toLocaleString();
    const entry = { machine, set: setNum, weight, reps, time };
    setMachine('');
    setSetNum('');
    setWeight('');
    setReps('');
    setSuccess('Workout added!');
    setTimeout(() => setSuccess(''), 1200);

    // Start rest timer
    setTimer(restDuration);
    setTimerActive(true);

    // Save to Firebase if user is logged in
    if (userEmail) {
      const userRef = ref(db, `tracker/${encodeEmail(userEmail)}`);
      await push(userRef, entry);
      // No need to update entries here, onValue will handle it
    } else {
      setEntries([entry, ...entries]); // For local-only
    }
  };

  return (
    <div className="tracker-container">
      <h1 className="tracker-title">Workout Tracker</h1>
      <div style={{marginBottom:16}}>
        <label htmlFor="rest-select">Rest Timer (seconds): </label>
        <select id="rest-select" value={restDuration} onChange={e => setRestDuration(Number(e.target.value))}>
          <option value={30}>30</option>
          <option value={60}>60</option>
          <option value={90}>90</option>
          <option value={120}>120</option>
        </select>
      </div>
      {timerActive && (
        <div className="rest-timer" style={{marginBottom:16, color:'#e53e3e', fontWeight:'bold'}}>
          Rest Timer: {timer} seconds
          <button style={{marginLeft:8}} onClick={() => {setTimerActive(false); setTimer(0);}}>Stop</button>
        </div>
      )}
      <form className="tracker-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Exercise Name"
          value={machine}
          onChange={e => setMachine(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Set Number"
          value={setNum}
          onChange={e => setSetNum(e.target.value)}
          min="1"
          required
        />
        <input
          type="number"
          placeholder="Weight (lbs)"
          value={weight}
          onChange={e => setWeight(e.target.value)}
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
            <span className="workout-name">{entry.machine}</span>
            <span className="workout-meta">Set {entry.set} | {entry.weight} lbs | {entry.reps} reps</span>
            <span className="workout-time">Logged: {entry.time}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tracker
