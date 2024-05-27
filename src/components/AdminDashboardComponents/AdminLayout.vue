//This component serves as a layout to give the functionality of logout to the 
//admins. Because the default navbar used has been a part of app.vue file

<template>

    <div class="admin-layout">
  
      <nav class="navbar">
  
        <div class="navbar-brand">
  
          <router-link to="/">Admin Dashboard</router-link>
  
        </div>
  
        <div class="navbar-menu">
  
          <router-link to="/admin" class="navbar-item">Home</router-link>
  
          <router-link to="/admin/tasks" class="navbar-item">Tasks</router-link>
  
          <button class="navbar-item logout-button" @click="logout">Logout</button>
  
        </div>
  
      </nav>
  
      <div class="admin-content">
  
        <slot></slot>
  
      </div>
  
    </div>
  
  </template>
  
  
  
  <script>
  
  export default {
  
    methods: {
  
      logout() {
  
        // Logic to handle logout
  
        console.log('Logging out...');
  
        // Redirect to login page or perform other logout actions
  
        this.$router.push('/login');
  
      }
  
    }
  
  };
  
  </script>
  
  
  
  <style scoped>
  
  .admin-layout {
  
    display: flex;
  
    flex-direction: column;
  
    height: 100vh;
  
  }
  
  
  
  .navbar {
  
    display: flex;
  
    justify-content: space-between;
  
    align-items: center;
  
    padding: 10px 20px;
  
    background-color: #333;
  
    color: white;
  
  }
  
  
  
  .navbar-brand {
  
    font-size: 1.5em;
  
  }
  
  
  
  .navbar-menu {
  
    display: flex;
  
    align-items: center;
  
  }
  
  
  
  .navbar-item {
  
    margin-left: 20px;
  
    color: white;
  
    text-decoration: none;
  
  }
  
  
  
  .logout-button {
  
    background: none;
  
    border: none;
  
    color: white;
  
    cursor: pointer;
  
    font-size: 1em;
  
  }
  
  </style>
  
  