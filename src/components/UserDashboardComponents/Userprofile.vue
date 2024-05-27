<template>
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h1>User Profile</h1>
        </div>
        <div class="col-auto">
          <button class="btn btn-outline-secondary" @click="cancel" :disabled="!isDataChanged">Cancel</button>
          <button class="btn btn-primary" @click="save" :disabled="!isDataChanged">Save</button>
        </div>
      </div>
      <div v-if="isLoading" class="text-center mt-5">Loading...</div>
      <div v-else class="row mt-4">
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ profileData.name }}</h5>
              <p class="card-text">ID: {{ profileData.id }}</p>
              <button class="btn btn-link" @click="changePassword">Change Password</button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ formatPhone(profileData.phone) }}</h5>
              <p class="card-text">{{ profileData.email }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ profileData.address }}, {{ profileData.city }}, {{ profileData.state }}, {{ profileData.country }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoading: true,
        isDataChanged: false,
        profileData: {},
      };
    },
    methods: {
      cancel() {
        // Revert changes
        this.isDataChanged = false;
      },
      save() {
        // Save changes
        this.isDataChanged = false;
      },
      changePassword() {
        // Show change password popup
      },
      formatPhone(phone) {
        // Format phone number
      }
    },
    mounted() {
      // Simulated async data fetch
      setTimeout(() => {
        this.profileData = {
          name: 'John Doe',
          id: '123456',
          phone: '+1234567890',
          email: 'john@example.com',
          address: '123 Main St',
          city: 'City',
          state: 'State',
          country: 'Country',
        };
        this.isLoading = false;
      }, 1000);
    }
  };
  </script>
  
  <style>
  .card {
    margin-bottom: 20px;
  }
  </style>
  