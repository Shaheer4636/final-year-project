<template>

  <div class="grid-container">

    <!-- Sidebar -->

    <div class="sidebar grid-item">

      <AdminSideBar />

    </div>

    

    <!-- Main Content -->

    <div class="grid-item main-content">

      <div class="content">

        <h1 class="dashboard-heading">Dashboard</h1>

        <div class="box-grid">

          <div class="box" v-for="section in sections" :key="section.title">

            <img :src="section.iconSrc" :alt="section.title" class="box-icon" />

            <h3>{{ section.title }}</h3>

          </div>

        </div>

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

  data() {

    return {

      sections: [

        { title: 'List Users', iconSrc: 'https://img.icons8.com/color/96/000000/user-group-man-man.png' },

        { title: 'Cluster Information', iconSrc: 'https://img.icons8.com/color/96/000000/cloud.png' },

        { title: 'List Pods', iconSrc: 'https://img.icons8.com/color/96/000000/container-truck.png' },

        { title: 'Resource Consumption', iconSrc: 'https://img.icons8.com/color/96/000000/graph.png' },

        { title: 'Stack Information', iconSrc: 'https://img.icons8.com/color/96/000000/stack.png' },

        { title: 'Pending Requests', iconSrc: 'https://img.icons8.com/color/96/000000/request-service.png' }

      ]

    };

  }

};

</script>



<style scoped>

.grid-container {

  display: grid;

  grid-template-columns: 250px 1fr; /* Sidebar and main content side by side */

  gap: 0; /* No gap between sidebar and main content */

  height: 100vh;

  background: #000000;

}



.grid-item {

  padding: 20px;

}



.sidebar {

  background-color: #000000; /* Ensure the sidebar is completely black */

  border-right: 2px solid #ffffff; /* White line separator */

}



.main-content {

  display: flex;

  flex-direction: column;

  justify-content: flex-start; /* Align items to the top */

  align-items: center;

  background-color: #000000;

  color: #ffffff;

  padding-top: 20px; /* Add padding to the top */

}



.content {

  width: 100%;

  display: flex;

  flex-direction: column;

  align-items: center;

}



.dashboard-heading {

  font-size: 2em;

  margin-bottom: 20px;

  color: #ffffff;

}



.box-grid {

  display: grid;

  grid-template-columns: repeat(3, 1fr); /* 3 columns */

  gap: 30px; /* Increased gap between boxes */

  width: 100%;

  max-width: 1200px;

}



.box {

  background-color: #2f3640;

  border-radius: 10px;

  padding: 40px; /* Increased padding for larger height */

  text-align: center;

  transition: transform 0.3s, box-shadow 0.3s;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

}



.box:hover {

  transform: translateY(-5px);

  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);

}



.box-icon {

  width: 64px;

  height: 64px;

  margin-bottom: 10px;

}



h3 {

  margin: 0;

  color: #ffffff;

}

</style>
