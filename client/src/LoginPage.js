import React, { useState } from 'react';
import './Style.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  // State variables for email, password, success message, and error message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handler for email input change
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  // Handler for password input change
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending login request to the server
      const response = await axios.post('http://localhost:4000/api/login', {
        email,
        password,
      });

      // Checking if the login was successful based on the status code
      if (response.status === 200) {
        // Successful login
        setSuccessMessage('Login successful!');
        setErrorMessage('');
      } else {
        // Unsuccessful login
        setErrorMessage('Invalid credentials');
        setSuccessMessage('');
      }
    } catch (error) {
      // Error during login
      console.error('Error logging in:', error.message);
      setErrorMessage('Invalid credentials');
      setSuccessMessage('');
    }
  };

  // JSX structure for the login form
  return (
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
        <h1>User Login</h1>
        {/* Email input field */}
        <input
          className="inputs"
          type="string"
          placeholder="Enter your Mail"
          value={email}
          onChange={handleChange}
        />
        {/* Password input field */}
        <input
          className="inputs"
          type="password"
          placeholder="Enter your password here"
          value={password}
          onChange={handleChangePassword}
        />
        <br />
        {/* Submit button */}
        <button type="submit">Submit</button>

        {/* Display success message if available */}
        {successMessage && <p className="success-message">{successMessage}</p>}
        {/* Display error message if available */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Link to the registration page */}
        <p>
          <Link to={'/register'}>Create Your Account here</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
