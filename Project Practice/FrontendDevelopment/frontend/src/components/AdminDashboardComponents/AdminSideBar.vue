<template>

    <div class="sidebar">
  
      <ul class="sidebar_list">
  
        <li><router-link to="/ListUsers" class="sidebar-item">List Users</router-link></li>
  
        <li><router-link to="/AdminClusterInfo" class="sidebar-item">Cluster Information</router-link></li>
  
        <li><router-link to="/AdminListPods" class="sidebar-item">List Pods</router-link></li>
  
        <li><router-link to="/Admin-resource-consumption" class="sidebar-item">Resource Consumption</router-link></li>
  
        <li><router-link to="/Admin-stack-information" class="sidebar-item">Stack Information</router-link></li>
  
        <li><router-link to="/AdminTaskList" class="sidebar-item">Admin Task List</router-link></li>
  
        <li><router-link to="/PendingUserRequest" class="sidebar-item">Pending Requests</router-link></li>
  
      </ul>
  
    </div>
  
  </template>
  
  
  
  <script>
  
  export default {
  
    name: 'AdminSideBar'
  
  };
  
  </script>
  
  
  
  <style scoped>
  
  :root {
  
    --sidebar-bg-color: #2c3e50;
  
    --sidebar-item-bg-color: #34495e;
  
    --sidebar-item-hover-color: #1abc9c;
  
    --sidebar-active-item-color: #16a085;
  
    --text-color: #ecf0f1;
  
    --icon-size: 64px;
  
    --accent-color: #10ac84;
  
    --main-bg-color: #1e272e;
  
    --card-bg-color: #2f3640;
  
    --card-shadow-color: rgba(0, 0, 0, 0.2);
  
  }
  
  
  
  .sidebar {
  
    background: var(--sidebar-bg-color); /* Sidebar gradient background */
  
    width: 220px;
  
    height: 100vh;
  
    padding: 20px 0;
  
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  
    display: flex;
  
    flex-direction: column;
  
    align-items: center;
  
    box-sizing: border-box;
  
    border-right: 1px solid #ffffff;
  
  }
  
  
  
  .sidebar_list {
  
    list-style: none;
  
    padding: 0;
  
    margin: 0;
  
    width: 100%;
  
    display: flex;
  
    flex-direction: column;
  
    align-items: center;
  
  }
  
  
  
  .sidebar_list li {
  
    width: 100%;
  
    margin: 5px 0;
  
  }
  
  
  
  .sidebar-item {
  
    display: block;
  
    width: 100%;
  
    padding: 12px 0;
  
    text-align: center;
  
    background-color: var(--sidebar-item-bg-color);
  
    color: var(--text-color);
  
    text-decoration: none;
  
    font-weight: bold;
  
    border-radius: 5px;
  
    transition: background-color 0.3s, box-shadow 0.3s; 
  
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  }
  
  
  
  .sidebar-item:hover {
  
    background-color: var(--sidebar-item-hover-color); 
  
    color: #ffffff;
  
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2); 
  
    transform: translateY(-2px); 
  
  }
  
  
  
  .sidebar-item.router-link-active {
  
    background-color: var(--sidebar-active-item-color);
  
    color: #ffffff;
  
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
  
    box-shadow: 0 4px 8px var(--card-shadow-color);
  
    border: 5px solid white;
  
    height: 100%; 
  
    box-sizing: border-box; 
  
  }
  
  
  
  .content {
  
    padding: 20px;
  
    text-align: center;
  
    color: var(--text-color);
  
    flex-grow: 1; 
  
    overflow-y: auto;
  
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
  
    background-color: #e3f2fd; 
  
    color: #0d47a1;
  
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  }
  
  
  
  .healthy-box p {
  
    font-size: 1.2em;
  
    margin-top: 10px;
  
  }
  
  
  
  .nodes-list {
  
    list-style-type: none;
  
    padding-left: 0;
  
    margin-top: 20px;
  
    background-color: #e3f2fd; 
  
    color: #0d47a1; 
  
    border-radius: 10px;
  
    padding: 20px;
  
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  
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