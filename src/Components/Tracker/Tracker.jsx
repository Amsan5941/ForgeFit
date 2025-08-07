import React, { useState } from 'react'

const Tracker = () => {
  const [workout, setWorkout] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [entries, setEntries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (workout && sets && reps) {
      setEntries([...entries, { workout, sets, reps }]);
      setWorkout('');
      setSets('');
      setReps('');
    }
  };

  return (
    <div>
      <h1>Welcome to the Tracker Page</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Workout Name"
          value={workout}
          onChange={e => setWorkout(e.target.value)}
          required
          style={{ marginRight: '10px' }}
        />
        <input
          type="number"
          placeholder="Sets"
          value={sets}
          onChange={e => setSets(e.target.value)}
          min="1"
          required
          style={{ marginRight: '10px', width: '60px' }}
        />
        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={e => setReps(e.target.value)}
          min="1"
          required
          style={{ marginRight: '10px', width: '60px' }}
        />
        <button type="submit">Add Workout</button>
      </form>
      <ul>
        {entries.map((entry, idx) => (
          <li key={idx}>
            <strong>{entry.workout}</strong>: {entry.sets} sets x {entry.reps} reps
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tracker
