<template>

  <div class="grid-container">

    <AdminSideBar />

    <div class="grid-item main-content">

      <div class="content">

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

  grid-template-columns: auto 1fr;

  gap: 20px;

  height: 100vh;

  background: var(--main-bg-color);

  padding: 20px;

}



.grid-item {

  padding: 20px;

}



.main-content {

  grid-column: 2;

  display: flex;

  flex-direction: column;

  gap: 30px;

  background-color: var(--card-bg-color);

  border-radius: 15px;

  box-shadow: 0 4px 8px var(--card-shadow-color);

  border: 5px solid white; /* Added white border */

}



.content {

  padding: 40px;

  text-align: center;

  color: var(--text-color);

}



.data-box {

  background-color: var(--card-bg-color);

  border-radius: 20px;

  padding: 40px;

  margin-bottom: 40px;

  box-shadow: 0 4px 8px var(--card-shadow-color);

}



.data-box h2 {

  margin-bottom: 30px;

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

  margin-top: 20px;

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