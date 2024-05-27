<template>
    <div class="container">
      <h1>Contact Us</h1>
      <p>Please fill out the form below to contact us:</p>
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" v-model="formData.message" rows="5" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>

  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Here you can implement the logic to send the form data
        console.log('Form submitted:', this.formData);
        // Example: Send form data to a server using Axios or fetch API
        // Upon successful submission, you might want to show a success message or redirect the user
      }
    }
  };
  </script>
  
  <style>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .contact-form {
    margin-bottom: 60px; /* Adjust the value based on the height of your footer */
  }
  </style>
  