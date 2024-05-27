<template>

  <div class="grid-container">

    <!-- Sidebar -->

    <div class="sidebar grid-item">

      <AdminSideBar />

    </div>

    

    <!-- Main Content -->

    <div class="grid-item main-content">

      <div class="content">

        <h1 class="dashboard-heading">Pods Information</h1>

        <div class="table-container">

          <table class="pods-table">

            <thead>

              <tr>

                <th>Name</th>

                <th>Phase</th>

              </tr>

            </thead>

            <tbody>

              <tr v-for="pod in pods" :key="pod.name">

                <td>{{ pod.name }}</td>

                <td>{{ pod.phase }}</td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>

  </div>

</template>



<script>

import AdminSideBar from "@/components/AdminDashboardComponents/AdminSideBar.vue";



export default {

  name: 'AdminClusterInfo',

  components: {

    AdminSideBar,

  },

  data() {

    return {

      pods: [],

    };

  },

  mounted() {

    this.fetchPods();

  },

  methods: {

    async fetchPods() {

      try {

        const response = await fetch('http://localhost:8090/api/getPodsHandler');

        const data = await response.json();

        this.pods = data.pods;

      } catch (error) {

        console.error('Error fetching pods:', error);

      }

    },

  },

};

</script>



<style scoped>

:root {

  --main-bg-color: #1e272e;

  --accent-color: #10ac84;

  --text-color: #f1f2f6;

  --card-bg-color: #2f3640;

  --card-shadow-color: rgba(0, 0, 0, 0.2);

  --table-bg-color: #2c3e50;

  --table-header-bg-color: #34495e;

  --table-odd-row-bg-color: #3c4e60;

  --table-even-row-bg-color: #465a6c;

  --table-hover-color: #325d88;

}



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



.table-container {

  width: 100%;

  max-width: 1200px;

  overflow-x: auto;

}



.pods-table {

  width: 100%;

  border-collapse: collapse;

  margin: 0 auto;

  border-radius: 15px;

  overflow: hidden;

  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

}



.pods-table th,

.pods-table td {

  padding: 20px;

  text-align: left;

}



.pods-table thead {

  background-color: var(--table-header-bg-color);

  color: var(--text-color);

}



.pods-table tr {

  transition: background-color 0.3s ease;

}



.pods-table tr:nth-child(even) {

  background-color: var(--table-even-row-bg-color);

}



.pods-table tr:nth-child(odd) {

  background-color: var(--table-odd-row-bg-color);

}



.pods-table tr:hover {

  background-color: var(--table-hover-color);

}



.pods-table th {

  font-weight: bold;

  font-size: 1.2em;

  background-color: var(--table-header-bg-color);

}



.pods-table td {

  color: #f1f2f6;

  font-size: 1.1em;

}



p {

  font-size: 1.5em;

  color: #f9f9f9;

}

</style>
