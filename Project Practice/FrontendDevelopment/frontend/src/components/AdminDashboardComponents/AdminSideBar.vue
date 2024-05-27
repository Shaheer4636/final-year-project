<template>

  <div id="sidebar-container">

    <ul class="sidebar_list">

      <li><router-link to="/ListUsers" class="sidebar-item">List Users</router-link></li>

      <li><router-link to="/AdminClusterInfo" class="sidebar-item">Cluster Information</router-link></li>

      <li><router-link to="/AdminListPods" class="sidebar-item">List Pods</router-link></li>

      <li><router-link to="/Admin-resource-consumption" class="sidebar-item">Resource Consumption</router-link></li>

      <li><router-link to="/Admin-stack-information" class="sidebar-item">Stack Information</router-link></li>

      <li><router-link to="/AdminTaskList" class="sidebar-item">Admin Task List</router-link></li>

      <li><router-link to="/PendingUserRequest" class="sidebar-item">Pending Requests</router-link></li>

    <li>

    <button class="logout-button" @click="logout">

      <img src="https://img.icons8.com/ios-filled/50/ffffff/logout-rounded.png" alt="Logout" class="logout-icon" />

      Logout

    </button>
    </li>

  </ul>

  </div>

</template>



<script>

export default {

  name: 'AdminSideBar',

  methods: {

    logout() {

      // Logic to handle logout

      console.log('Logging out...');

      // Redirect to login page or perform other logout actions

      this.$router.push('/login');

    }

  }

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

.logout-button{
  margin-left: 10%;
}

#sidebar-container {

  display: flex;

  flex-direction: column;

  height: 100vh;

  background-color: var(--sidebar-bg-color);

  padding: 10px;

  color: #fff;

}



.sidebar_list {

  list-style: none;

  padding: 0;

  margin: 0;

  width: 100%;

  display: flex;

  flex-direction: column;

  align-items: center;

  flex-grow: 1; /* Allow the list to grow and take available space */

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



#sidebar-container .router-link-active {

  background-color: var(--sidebar-active-item-color);

  color: #ffffff;

}



.logout-button {

  padding: 15px 20px;

  background-color: #e74c3c;

  color: white;

  border: none;

  border-radius: 5px;

  cursor: pointer;

  display: flex;

  align-items: center;

  justify-content: center;

  width: 80%;

  font-size: 1.2em;

  transition: background-color 0.3s, box-shadow 0.3s;

  margin-top: 20px; /* Add margin to position it above the bottom */

}



.logout-button:hover {

  background-color: #c0392b;

  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);

}



.logout-icon {

  width: 24px;

  height: 24px;

  margin-right: 10px;

}

</style>
