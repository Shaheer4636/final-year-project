<template>

    <div id="stack-info-page">
  
      <div id="sidebar-container">
  
        <AdminSideBar />
  
      </div>
  
  
  
      <div id="main-content">
  
        <h1>Stack Information</h1>
  
        <div class="ticker-container">
  
          <div class="ticker">
  
            <div class="ticker-content">
  
              <p>Connecting to server...</p>
  
              <p>Updating stack information...</p>
  
              <p>Connecting to server...</p>
  
              <p>Updating stack information...</p>
  
            </div>
  
          </div>
  
        </div>
  
        <div class="info-section">
  
          <img src="../../assets/kubeflow.png" alt="Kubeflow" />
  
          <div class="info-content">
  
            <h2>Kubeflow Version</h2>
  
            <p>v1.4.0</p>
  
          </div>
  
        </div>
  
        <div class="info-section">
  
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" alt="Kubernetes" />
  
          <div class="info-content">
  
            <h2>Kubernetes Version</h2>
  
            <p>v1.21.0</p>
  
          </div>
  
        </div>
  
        <div class="info-section">
  
          <img src="../../assets/centos.jpeg" alt="CentOS" />
  
          <div class="info-content">
  
            <h2>CentOS Version</h2>
  
            <p>v8.3.2011</p>
  
          </div>
  
        </div>
  
        <div class="info-section">
  
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg" alt="Prometheus" />
  
          <div class="info-content">
  
            <h2>Prometheus Version</h2>
  
            <p>v2.26.0</p>
  
          </div>
  
        </div>
  
        <div class="info-section">
  
          <img src="../../assets/grafana.jpeg" alt="Grafana" />
  
          <div class="info-content">
  
            <h2>Grafana Version</h2>
  
            <p>v7.5.5</p>
  
          </div>
  
        </div>
  
        <div class="info-section">
  
          <img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" alt="Docker" />
  
          <div class="info-content">
  
            <h2>Docker Version</h2>
  
            <p>v20.10.5</p>
  
          </div>
  
        </div>
  
      </div>
  
    </div>
  
  </template>
  
  
  
  <script>
  
  import AdminSideBar from "@/components/AdminDashboardComponents/AdminSideBar.vue";
  
  
  
  export default {
  
    name: 'StackInformationPage',
  
    components: {
  
      AdminSideBar
  
    }
  
  };
  
  </script>
  
  
  
  <style scoped>
  
  #stack-info-page {
  
    display: flex;
  
  }
  
  
  
  #sidebar-container {
  
    flex: 0 0 250px;
  
    background-color: #000;
  
    padding: 10px;
  
    color: #fff;
  
  }
  
  
  
  #main-content {
  
    flex: 1;
  
    padding: 20px;
  
    font-family: Arial, sans-serif;
  
    background-color: #181818;
  
  }
  
  
  
  h1 {
  
    margin-bottom: 40px;
  
    font-size: 2.5em;
  
    color: #fff;
  
    text-align: center;
  
  }
  
  
  
  .ticker-container {
  
    overflow: hidden;
  
    background-color: #333;
  
    padding: 10px;
  
    border-radius: 8px;
  
    margin-bottom: 20px;
  
  }
  
  
  
  .ticker {
  
    display: flex;
  
    justify-content: flex-start;
  
    width: 100%;
  
    animation: scroll 10s linear infinite;
  
  }
  
  
  
  .ticker-content {
  
    display: flex;
  
  }
  
  
  
  .ticker-content p {
  
    color: #ffffff;
  
    margin-right: 50px;
  
    white-space: nowrap;
  
  }
  
  
  
  @keyframes scroll {
  
    from { transform: translateX(100%); }
  
    to { transform: translateX(-100%); }
  
  }
  
  
  
  .info-section {
  
    display: flex;
  
    align-items: center;
  
    margin-bottom: 20px;
  
    background-color: #222;
  
    padding: 20px;
  
    border-radius: 8px;
  
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  }
  
  
  
  .info-section img {
  
    width: 80px;
  
    height: 80px;
  
    margin-right: 20px;
  
    border-radius: 8px;
  
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
    object-fit: contain;
  
  }
  
  
  
  .info-content {
  
    display: flex;
  
    flex-direction: column;
  
    justify-content: center;
  
  }
  
  
  
  .info-content h2 {
  
    font-size: 1.5em;
  
    color: #ffffff;
  
    margin: 0;
  
  }
  
  
  
  .info-content p {
  
    font-size: 1.2em;
  
    color: #bbb;
  
    margin: 5px 0 0;
  
  }
  
  
  
  #sidebar-container a {
  
    color: white;
  
    display: block;
  
    padding: 10px;
  
    text-decoration: none;
  
    border-radius: 4px;
  
    transition: background-color 0.3s;
  
  }
  
  
  
  #sidebar-container a:hover {
  
    background-color: #444;
  
  }
  
  </style>