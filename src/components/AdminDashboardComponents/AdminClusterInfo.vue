<template>

  <div class="grid-container">

    <!-- Sidebar -->

    <div class="sidebar grid-item">

      <AdminSideBar />

    </div>

    

    <!-- Main Content -->

    <div class="grid-item main-content">

      <div class="content">

        <h1 class="dashboard-heading">Cluster Health</h1>

        <div class="data-box">

          <h2>

            <img src="https://img.icons8.com/color/96/000000/heart-with-pulse.png" alt="Cluster Health" class="icon" />

            Cluster Health

          </h2>

          <div v-if="clusterHealth !== null" :class="['cluster-health-box', clusterHealth ? 'healthy-box' : 'unhealthy-box']">

            <img src="https://img.icons8.com/color/96/000000/checkmark.png" alt="Healthy" class="status-icon" v-if="clusterHealth" />

            <img src="https://img.icons8.com/color/96/000000/cancel.png" alt="Unhealthy" class="status-icon" v-else />

            <p>{{ clusterHealth ? 'Cluster is good and healthy' : 'Cluster is unhealthy' }}</p>

          </div>

        </div>



        <div class="data-box">

          <h2>

            <img src="https://img.icons8.com/color/96/000000/server.png" alt="Nodes" class="icon" />

            Nodes

          </h2>

          <ul class="nodes-list">

            <li v-for="node in nodes" :key="node">

              <img src="https://img.icons8.com/color/96/000000/globe.png" alt="Node" class="node-icon" />

              {{ node }}

            </li>

          </ul>

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

      clusterHealth: null,

      nodes: [],

    };

  },

  mounted() {

    this.fetchClusterHealth();

    this.fetchNodes();

  },

  methods: {

    async fetchClusterHealth() {

      try {

        const response = await fetch('http://localhost:8090/api/getClusterHealthHandler');

        const data = await response.json();

        this.clusterHealth = data.clusterHealthy;

      } catch (error) {

        console.error('Error fetching cluster health:', error);

      }

    },

    async fetchNodes() {

      try {

        const response = await fetch('http://localhost:8090/api/getNodesHandler');

        const data = await response.json();

        this.nodes = data.nodes;

      } catch (error) {

        console.error('Error fetching nodes:', error);

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

  --icon-size: 64px;

}



.grid-container {

  display: grid;

  grid-template-columns: 250px 1fr; /* Adjusted sidebar width */

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



.data-box {

  background-color: var(--card-bg-color);

  border-radius: 20px;

  padding: 20px;

  margin-bottom: 20px;

  box-shadow: 0 4px 8px var(--card-shadow-color);

  width: 80%; /* Adjust width to make it more centered */

}



.data-box h2 {

  margin-bottom: 20px;

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 2em;

  color: var(--accent-color);

}



.icon {

  width: var(--icon-size);

  height: var(--icon-size);

  margin-right: 10px;

}



.cluster-health-box {

  display: flex;

  flex-direction: column;

  align-items: center;

  padding: 20px;

  border-radius: 10px;

  background-color: #e3f2fd; /* Light blue background */

  color: #0d47a1; /* Dark blue text */

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */

}



.healthy-box p {

  font-size: 1.2em;

  margin-top: 10px;

}



.unhealthy-box {

  background-color: #ffcccb; /* Light red background */

  color: #d32f2f; /* Dark red text */

}



.nodes-list {

  list-style-type: none;

  padding-left: 0;

  margin-top: 20px;

  background-color: #e3f2fd; /* Light blue background */

  color: #0d47a1; /* Dark blue text */

  border-radius: 10px;

  padding: 20px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */

}



.nodes-list li {

  margin-bottom: 20px;

  display: flex;

  align-items: center;

  font-size: 1.4em;

}



.node-icon {

  width: var(--icon-size);

  height: var(--icon-size);

  margin-right: 10px;

}

</style>