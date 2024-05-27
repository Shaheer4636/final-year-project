<template>

  <div id="dashboard-page">

    <div id="sidebar-container">

      <AdminSideBar />

    </div>



    <div id="main-content">

      <h1>Dashboard</h1>

      <div class="row">

        <div class="column">

          <iframe

            src="http://172.16.14.43:3000/d-solo/_eioEq-ik-1/kube-eagle-1?orgId=1&refresh=30s&var-node_pool=All&var-node=All&var-Filters=node%7C%21%3D%7C&from=1716520766306&to=1716531566306&panelId=2"

            frameborder="0"

          ></iframe>

        </div>



        <div class="column">

          <iframe

            src="http://172.16.14.43:3000/d-solo/_eioEq-ik-1/kube-eagle-1?orgId=1&refresh=30s&var-node_pool=All&var-node=All&var-Filters=node%7C%21%3D%7C&from=1716520682454&to=1716531482454&panelId=7"

            frameborder="0"

          ></iframe>

        </div>



        <div class="column">

          <iframe

            src="http://172.16.14.43:3000/d-solo/_eioEq-ik-1/kube-eagle-1?orgId=1&refresh=30s&var-node_pool=All&var-node=All&var-Filters=node%7C%21%3D%7C&from=1716520731102&to=1716531531102&panelId=8"

            frameborder="0"

          ></iframe>

        </div>



        <div class="column">

          <iframe

            src="http://172.16.14.43:3000/d-solo/_eioEq-ik-1/kube-eagle-1?orgId=1&refresh=30s&var-node_pool=All&var-node=All&var-Filters=node%7C%21%3D%7C&from=1716520751306&to=1716531551306&panelId=3"

            frameborder="0"

          ></iframe>

        </div>



        <div class="column">

          <iframe

            src="http://172.16.14.43:3000/d-solo/_eioEq-ik-1/kube-eagle-1?orgId=1&refresh=30s&var-node_pool=All&var-node=All&var-Filters=node%7C%21%3D%7C&from=1716521285489&to=1716532085489&panelId=22"

            frameborder="0"

          ></iframe>

        </div>



        <div class="column">

          <iframe

            src="http://172.16.14.43:3000/d-solo/_eioEq-ik-1/kube-eagle-1?orgId=1&refresh=30s&var-node_pool=All&var-node=All&var-Filters=node%7C%21%3D%7C&from=1716522378531&to=1716533178531&panelId=23"

            frameborder="0"

          ></iframe>

        </div>

      </div>

    </div>

  </div>

</template>



<script>

import AdminSideBar from "@/components/AdminDashboardComponents/AdminSideBar.vue";



export default {

  name: 'GrafanaDashboardPage',

  components: {

    AdminSideBar

  }

};

</script>



<style scoped>

#dashboard-page {

  display: flex;

}



#sidebar-container {

  flex: 0 0 250px; /* Adjust this width as needed */

  background-color: #000;

  padding: 10px;

  color: #fff;

}



#main-content {

  flex: 1;

  padding: 20px;

}



h1 {

  margin-bottom: 40px;

  font-size: 2.5em;

  color: #34495e;

}



.row {

  display: flex;

  flex-wrap: wrap;

  margin: 0 -15px;

}



.column {

  margin: 15px;

  flex-basis: calc(50% - 30px);

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  transition: transform 0.3s;

}



.column:hover {

  transform: scale(1.05);

}



iframe {

  width: 100%;

  height: 400px;

  border-radius: 8px;

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

</style>