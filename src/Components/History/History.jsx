import React, { useState, useEffect } from 'react'
import { db } from '../../firebaseConfig.js'
import { ref, onValue } from 'firebase/database'
import './History.css'

const History = () => {
  const [selectedDate, setSelectedDate] = useState(() => new Date().toISOString().slice(0, 10))
  const [workouts, setWorkouts] = useState([])

  const userEmail = localStorage.getItem('userEmail')
  const encodeEmail = (email) => email ? email.replace(/\./g, ',') : null

  useEffect(() => {
    if (!userEmail) return
    const userRef = ref(db, `tracker/${encodeEmail(userEmail)}`)
    const unsubscribe = onValue(userRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        // Filter workouts by selected date (compare only yyyy-mm-dd)
        const filtered = Object.values(data).filter(entry => {
          if (!entry.time) return false
          // Try to extract yyyy-mm-dd from entry.time (which is locale string)
          const entryDate = new Date(entry.time)
          const entryDateStr = entryDate.toISOString().slice(0, 10)
          return entryDateStr === selectedDate
        })
        // Sort by time descending
        filtered.sort((a, b) => new Date(b.time) - new Date(a.time))
        setWorkouts(filtered)
      } else {
        setWorkouts([])
      }
    })
    return () => unsubscribe()
  }, [userEmail, selectedDate])

  return (
    <div className="history-container">
      <h2>Workout History</h2>
      <label>
        Filter by day:{' '}
        <input
          type="date"
          value={selectedDate}
          onChange={e => setSelectedDate(e.target.value)}
        />
      </label>
      <div className="history-table">
        {workouts.length === 0 ? (
          <p>No workouts found for this day.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Exercise</th>
                <th>Set</th>
                <th>Weight (lbs)</th>
                <th>Reps</th>
                <th>Logged Time</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map((w, idx) => (
                <tr key={idx}>
                  <td>{w.machine}</td>
                  <td>{w.set}</td>
                  <td>{w.weight}</td>
                  <td>{w.reps}</td>
                  <td>{w.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default History
