import React, { useState } from 'react';
import axios from 'axios';
import './Style.css';

function Register() {
  // State hooks for managing form inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handler for form submission and manager registration
  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      // Sending manager registration request to the server
      const response = await axios.post('http://localhost:4000/api/register', {
        username,
        email,
        password,
      });

      // Log success message and update state
      console.log('Registered successfully:', response.data);
      setSuccessMessage('Registration successful!');
      setErrorMessage('')

      // Clearing form inputs
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (error) {
      // Clear success message on error
      setSuccessMessage('');

      // Clearing form inputs
      setUsername('');
      setEmail('');
      setPassword('');

      // Logging registration error and updating error message state
      const errorMessage = error.response ? error.response.data : error.message;
      console.error('Error registering user:', errorMessage);
      setErrorMessage('Registration failed check your mail');
    }
  };

  return (
    <div>
      {/* Display success message if available */}


      {/* User Registration Form */}
      <form onSubmit={handleRegistration}>
        <h2 className="heading">User Registration</h2>
        {successMessage && <p className="success-message">{successMessage}</p>}

{/* Display error message if available */}
{errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Input for User Name */}
        <label className="label">
          Name:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            required
          />
        </label>
        <br />

        {/* Input for User Email */}
        <label className="label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            required
          />
        </label>
        <br />

        {/* Input for User Password */}
        <label className="label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            required
          />
        </label>
        <br />

        {/* Button to submit the registration form */}
        <button type="submit" className="button">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
