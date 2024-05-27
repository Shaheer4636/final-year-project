<template>
  <nav class="top-navbar">
    <ul>
      <li><img :src="ncpLogo" alt="NCP Logo" class="logo"></li>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/contactus">Contact Us</router-link></li>
      <li><router-link to="/Aboutus">About</router-link></li>
    </ul>
  </nav>
</template>

<script>
// Import the image using ES module syntax
import ncpLogo from '@/assets/NCPweb-AITeC.png';

export default {
  name: 'Navbar',
  data() {
    return {
      ncpLogo: ncpLogo
    };
  }
}
</script>

<style scoped>
.top-navbar {
  background-color: #000; /* Black background */
  overflow: hidden;
}

.top-navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: left; /* Align text to the left */
}

.top-navbar li {
  display: inline;
}

.top-navbar li a {
  display: inline-block;
  color: #fff; /* White text */
  padding: 14px 16px;
  text-decoration: none;
  font-size: 14px; /* Smaller font size */
}

.top-navbar li a:hover, .top-navbar li a.router-link-exact-active {
  background-color: #ddd; /* Light grey background on hover */
  color: black; /* Black text on hover */
}

.logo {
  width: 218px;
  height: 77px;
}
</style>