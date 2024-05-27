<template>
    <div>
    
      <h1>ML PipeLines</h1>
      <div class="box-container">
        <button class="box" @click="navigateToResourceRequest">Resource Request</button>
        <div v-for="(box, index) in boxes" :key="index" class="box">
          {{ box }}
        </div>
      </div>
    </div>
  </template>
<script></script>  