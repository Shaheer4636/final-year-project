<template>
  <div>
    <h1 style="color:azure;">Welcome to the user dashboard</h1>
    <div class="box-container">
      <div v-for="(box, index) in boxes" :key="index" class="box" @click="() => navigateTo(box.routeName)">
        <font-awesome-icon :icon="box.icon" class="icon" /> <!-- Display the icon -->
        {{ box.text }}
      </div>
    </div>
  </div>
</template>



<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faSitemap, faBookOpen, faNetworkWired, faSeedling, faChartLine } from '@fortawesome/free-solid-svg-icons';
import DefaultFooter from './DefaultFooter.vue';

library.add(faEnvelope, faSitemap, faBookOpen, faNetworkWired, faSeedling, faChartLine);

export default {
  components: {
        FontAwesomeIcon,
    DefaultFooter,
  },
  data() {
    return {
      boxes: [
        { text: 'Resource Request', icon: 'envelope', routeName: 'resource-request' },
        { text: 'ML Pipelines', icon: 'sitemap', routeName: 'ml-pipelines' },
        { text: 'Notebooks', icon: 'book-open', routeName: 'notebooks' },
        { text: 'Access Kubeflow', icon: 'network-wired', routeName: 'kubeflow' },
        { text: 'Access Katib', icon: 'seedling', routeName: 'katib' },
        { text: 'Resources Utilization', icon: 'chart-line', routeName: 'resource-utilization' },
      ],
    };
  },
  methods: {
    navigateTo(routeName) {
      this.$router.push({ name: routeName });
    }
    }
    
  };
</script>




<style scoped>
/* Add CSS styles for the boxes */
h1 {
  margin-top: 5px;
  padding: 20px;
  text-align: center;
  color: #020202; /* White text for the heading */
}

.box-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 0 auto; /* Center the container */
}

.box {
  flex: 1 0 calc(25% - 20px); /* Reduced width of the boxes */
  height: 150px; /* Increased height of the boxes */
  padding: 20px;
  margin: 10px;
  background-color: #2c2c2c; /* Aesthetic dark grey for the boxes */
  color: #e0e0e0; /* Light grey text color for better visibility */
  border: none; /* Remove border */
  text-align: center;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1); /* Subtle white shadow for depth */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; /* Align icon and text vertically */
}

.box:hover {
  transform: translateY(-5px); /* Slightly raise the box on hover */
  box-shadow: 0 6px 12px rgba(255, 255, 255, 0.2); /* Increase shadow for hover effect */
  color: #ffffff; /* White text color on hover for contrast */
}

.font-awesome-icon {
  margin-bottom: 8px; /* Add some space between the icon and the text */
}

.box-katib .font-awesome-icon {
  font-size: 3em; /* Makes the Katib icon larger */
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .box {
    flex: 1 0 calc(40% - 20px); /* Adjusted width for smaller screens */
  }
}

@media (max-width: 600px) {
  .box {
    flex: 1 0 calc(90% - 20px); /* Adjusted width for very small screens */
  }
}
</style>
