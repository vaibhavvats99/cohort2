import React, { useState } from 'react';
import './App.css';

function App() {
  const [id, setId] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = () => {
    alert(`Logging in with\nID: ${id}\nPassword: ${pass}`);
  };

  const handleGoogleSignIn = () => {
    alert("Signing in with Google (dummy action)");
  };

  return (
    <div className="App">
      <div className="login-container">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <button onClick={handleLogin}>LOG IN</button>
        <hr />
        <button onClick={handleGoogleSignIn} className="google-btn">
          SIGN IN BY GOOGLE
        </button>
      </div>
    </div>
  );
}

export default App;
