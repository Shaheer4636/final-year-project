<template>
    <div>
      <h1>Kubernetes Cluster Dashboard</h1>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <h2 v-if="clusterInfo">Cluster Info</h2>
        <p v-if="clusterInfo">Cluster is healthy: {{ clusterInfo.clusterHealthy }}</p>
        <div v-if="clusterInfo">
          <h2>Nodes in the cluster:</h2>
          <ul>
            <li v-for="node in clusterInfo.nodes" :key="node">{{ node }}</li>
          </ul>
        </div>
        <div v-if="clusterInfo">
          <h2>Pods in the cluster:</h2>
          <ul>
            <li v-for="pod in clusterInfo.pods" :key="pod.name">{{ pod.name }} ({{ pod.phase }})</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loading: true,
        clusterInfo: null
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        fetch('http://localhost:8080')
          .then(response => response.json())
          .then(data => {
            console.log('Received data:', data);
            this.loading = false;
            this.clusterInfo = data;
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            this.loading = false;
          });
      }
    }
  };
  </script>
  