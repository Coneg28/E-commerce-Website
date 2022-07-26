import React, { useState } from "react";

function App() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  function validateCred() {
    if (username === "admin@admin.com" && password === "admin") {
      window.confirm("Nice");
    } else {
      window.confirm("Nope!");
    }
  }

  return (
    <div className="App">
      <link rel="stylesheet" href="style.css" />

      <div class="background" />
      <form>
        <h3>Login Form</h3>

        <label for="Email">Email</label>
        <input
          type="text"
          placeholder="Email"
          id="Email"
          required
          onChange={(e) => setUserName(e.target.value)}
        />

        <label for="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={validateCred}>LOG IN</button>
      </form>
    </div>
  );
}

export default App;
