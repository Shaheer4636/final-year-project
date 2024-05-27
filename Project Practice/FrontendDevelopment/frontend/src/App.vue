<template>

  <div id="app">

    <Navbar />

    <div>

      <RouterView/>

      <AdminKubeeagle />

    </div>

    <Footer />

  </div>

</template>



<script setup>

import Navbar from "./components/DefaultNavbar.vue";

import Footer from "./components/DefaultFooter.vue";

</script>



<script>

//import AdminKubeeagle from './components/Admin-Consuption.vue';



export default {

  name: 'App',

  components: {

    // Navbar,

    Footer,

    //AdminKubeeagle

  }

};

</script>



<style scoped>

#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;

  text-align: center;

  /* color: #2c3e50;

  margin-top: 60px; */

}

</style>