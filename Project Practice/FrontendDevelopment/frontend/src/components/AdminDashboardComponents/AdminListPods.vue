<template>

  <div class="grid-container">

    <AdminSideBar/>



    <div class="grid-item main-content">

      <div class="content">

        <h1>Pods Information</h1>

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

    <br>
    <br>
    <br>

  </div>

</template>



<script>

import AdminSideBar from "@/components/AdminDashboardComponents/AdminSideBar.vue"



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

  grid-template-columns: auto 1fr;

  gap: 20px;

  height: 100vh;

  background: var(--main-bg-color);

  padding: 20px;

  box-sizing: border-box;

}



.grid-item {

  padding: 20px;

  overflow: hidden;

}



.main-content {

  grid-column: 2;

  display: flex;

  flex-direction: column;

  gap: 20px;

  background-color: var(--card-bg-color);

  border-radius: 15px;

  box-shadow: 0 10px 30px var(--card-shadow-color);

  padding: 20px;

  height: 100%;

  box-sizing: border-box;

  border: 2px solid #e9e9e9; /* Enhanced border with accent color */

}



.content {

  flex-grow: 1;

  overflow-y: auto;

}



h2 {

  margin-bottom: 20px;

  font-size: 2.5em;

  color: var(--accent-color);

  text-align: center;

}



.table-container {

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