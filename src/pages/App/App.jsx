import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar'
import NotePage from '../NotePage/NotePage'

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {
        user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>

              <Route path="/" element={<NotePage user={user} />} />

            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}