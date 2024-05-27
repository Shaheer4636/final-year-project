<template>
    <div class="container">
      <h1>Welcome to NCP ML-Facility</h1>
  <br>
  
      <!-- Login Section -->
      <div class="section">
        <h2>Login</h2>
        <p class="white-text">Already have an account? Login here:</p>
        <div class="button-container">
          <router-link to="/userlogin" class="button">Login as User</router-link>
          <router-link to="/adminlogin" class="button">Login as Admin</router-link>
        </div>
      </div>
  
      <!-- Separator Line -->
      <div class="separator"></div>
  
      <!-- Registration Section -->
      <div class="section">
        <h2>Registration</h2>
        <p class="white-text">Don't have an account? Register here:</p>
        <div class="button-container">
          <router-link to="/UserRegistration" class="button">Register as User</router-link>
          <router-link to="/AdminRegistration" class="button">Register as Admin</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 800;
    font-size: 36px;
    margin-bottom: 20px;
  }
  
  .section {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  
  .separator {
    border-bottom: 2px solid #ccc;
    margin: 20px auto;
  }
  
  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .white-text {
    color: #fff;
  }
  
  .button-container {
    display: flex;
    justify-content: center;
  }
  
  .button {
    display: inline-block;
    padding: 12px 40px;
    margin: 10px;
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    background-color: #007bff;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .button:hover {
    background-color: #0056b3;
  }
  </style>
  
  <script>
  export default {
    created() {
      document.title = 'Welcome to NCP ML-Facility';
    }
  };
  </script>
  
