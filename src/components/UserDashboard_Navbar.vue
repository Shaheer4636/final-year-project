<template>
    <div class="navbar">
      <ul class="left-links">
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
      <div class="right-links">
        <div class="dropdown">
          <button class="dropbtn" @click="toggleDropdown">
            <span class="menu-bars">☰</span>
          </button>
          <div v-if="isDropdownOpen" class="dropdown-content">
            <router-link to="/settings">Settings</router-link>
            <router-link to="/profile">Profile</router-link>
            <router-link to="/password">Password</router-link>
            <router-link to="/theme">Theme</router-link>
          </div>
        </div>
      </div>
    </div>
  
  </template>
  
  

  <script>

  export
   
  default {
    data() {
      return {
        isDropdownOpen: false,
      };
    },
    methods: {
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
      },
    },
  };
  </script>
  
<style scoped>

.navbar {
  background-color: #000;
  display: flex;
  justify-content: space-between;
}

.left-links,
.right-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex; /* Make links horizontal */
}

.left-links li {
  margin-right: 10px; /* Add spacing between links */
}

.navbar a {
  color: #fff;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 14px;
}

.navbar a:hover {
  background-color: #ddd;
}

.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: silver; /* Silver background */
  min-width: 160px;
  border: 1px solid #ccc;
  border-radius: 4px;
  right: 0;
  top: 100%;
  opacity: 0;
  transition: opacity 0.3s;
}

.dropdown:hover .dropdown-content {
  display: block;
  opacity: 1;
}

.dropbtn {
  background-color: #fff;
  border: none;
  cursor: pointer;
  margin-right: 10px;
}

.dropbtn:hover {
  background-color: #ddd;
}

.dropdown-content a {
  color: black; /* Black text color */
  padding: 12px 16px;
  text-decoration: none;
  display: block; /* Vertical list */
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropbtn {
  /* ... Existing styles ... */
  text-align: center; /* Center the menu bars */
  font-size: 18px; /* Adjust font size for better visibility */
}

.menu-bars {
  position: relative;
  top: 2px; /* Adjust vertical position if needed */
}
  
</style>