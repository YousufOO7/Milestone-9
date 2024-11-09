import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import './App.css'
import { auth } from './firebase_confing';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();

  const handleLogin = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
      console.log(result.user)
      setUser(result.user);
    })
    .catch(error => {
      console.log(error)
      setUser(null)
    })
  }

  return (
    <>
      
      <h1>Simple Firebase</h1>

        <div>
          <button onClick={handleLogin}>Login</button>
          <h2>Name: {user.displayName}</h2>
          <div>
            <h5>image</h5>
            <img src={user.photoURL} alt="Image" />
          </div>
        </div>
    </>
  )
}

export default App
