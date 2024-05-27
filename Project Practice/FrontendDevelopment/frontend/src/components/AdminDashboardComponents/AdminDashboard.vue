<template>

  <div class="grid-container">

    <div class="grid-item sidebar">

      <AdminSideBar />

    </div>

    <div class="grid-item main-content">

      <div class="content">

        Main Content

      </div>

    </div>

  </div>

</template>



<script>

import AdminSideBar from "@/components/AdminDashboardComponents/AdminSideBar.vue";



export default {

  name: 'userdashboard',

  components: {

    AdminSideBar,

  },

};

</script>



<style scoped>

.grid-container {

  display: grid;

  grid-template-columns: auto 1fr; /* Sidebar and main content side by side */

  grid-template-rows: 1fr; /* Single row */

  gap: 10px;

  height: 100vh;

  background: #000000;

}



.grid-item {

  padding: 20px;

}



#sidebar-container a {

color: white; /* Change link colors to white for better visibility */

display: block; /* Make the links take up the full width */

padding: 10px;

text-decoration: none; /* Remove underline */

border-radius: 4px;

transition: background-color 0.3s;

}



#sidebar-container a:hover {

background-color: #444; /* Change background on hover to differentiate */

}



.main-content {

  grid-row: 1;

  grid-column: 2 / span 1;

  display: grid;

  grid-template-columns: 1fr;

  gap: 10px;

  background-color: #27496d;

}



.content {

  padding: 10px;

  text-align: center;

}



.button {

  display: inline-block;

  text-decoration: none;

  color: #1a0799;

  background-color: #ffffff;

  border-radius: 5px;

  cursor: pointer;

}



.button:hover {

  background-color: #0056b3;

}



.footer {

  grid-column: 1 / span 2;

}


</style>