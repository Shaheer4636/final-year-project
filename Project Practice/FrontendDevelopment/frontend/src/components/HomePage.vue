<template>
     <br>
    <br>
    <br>

  <div class="container">

    <h1>Welcome to NCP ML-Facility</h1>

    <br>
 

    <!-- Toggle Switch -->

    <div class="toggle-container">

      <label class="switch">

        <input type="checkbox" v-model="isUser">

        <span class="slider round"></span>

      </label>

      <span class="toggle-label">{{ isUser ? 'User' : 'Admin' }}</span>

    </div>

    <!-- Login Form -->

    <div class="form-container">

      <div class="form-header">

        <button :class="{'active': isLogin}" @click="isLogin = true">Login</button>

        <button :class="{'active': !isLogin}" @click="isLogin = false">Signup</button>

      </div>

      <form v-if="isLogin">

        <input type="email" placeholder="Email Address" required>

        <input type="password" placeholder="Password" required>

        <a href="#" class="forgot-password">Forgot password?</a>

        <button type="submit" class="form-button">Login</button>

        <p>Not a member? <a href="#" @click="isLogin = false">Signup now</a></p>

      </form>

      <form v-else>

        <input type="email" placeholder="Email Address" required>

        <input type="password" placeholder="Password" required>

        <button type="submit" class="form-button">Signup</button>

        <p>Already a member? <a href="#" @click="isLogin = true">Login now</a></p>

      </form>
 
    </div>

  </div>

</template>



<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');



body {

  background: linear-gradient(to right, #1e3c72, #2a5298);

  font-family: 'Roboto', sans-serif;

  color: #fff;

  margin: 0;

  padding: 0;

  display: flex;

  justify-content: center;

  align-items: center;

  height: 100vh;

}



.container {

  max-width: 600px;

  margin: 0 auto;

  padding: 40px;

  text-align: center;

  background: rgba(0, 0, 0, 0.7);

  border-radius: 10px;

  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  animation: fadeIn 1s ease-in-out;

}



h1 {

  font-family: 'Roboto', sans-serif;

  font-weight: 700;

  font-size: 48px;

  margin-bottom: 20px;

  color: #fff;

  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

}



.toggle-container {

  display: flex;

  justify-content: center;

  align-items: center;

  margin-bottom: 20px;

}



.switch {

  position: relative;

  display: inline-block;

  width: 50px;

  height: 25px;

}



.switch input {

  opacity: 0;

  width: 0;

  height: 0;

}



.slider {

  position: absolute;

  cursor: pointer;

  top: 0;

  left: 0;

  right: 0;

  bottom: 0;

  background-color: #ccc;

  transition: 0.4s;

  border-radius: 25px;

}



.slider:before {

  position: absolute;

  content: "";

  height: 19px;

  width: 19px;

  left: 3px;

  bottom: 3px;

  background-color: white;

  transition: 0.4s;

  border-radius: 50%;

}



input:checked + .slider {

  background-color: #007bff;

}



input:checked + .slider:before {

  transform: translateX(25px);

}



.toggle-label {

  margin-left: 10px;

  font-size: 18px;

  color: #fff;

}



.form-container {

  background: #fff;

  padding: 30px;

  border-radius: 10px;

  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  color: #333;

  width: 100%;

}



.form-header {

  display: flex;

  justify-content: space-around;

  margin-bottom: 20px;

}



.form-header button {

  background: none;

  border: none;

  font-size: 18px;

  cursor: pointer;

  padding: 10px 20px;

  border-radius: 5px;

  transition: background-color 0.3s;

}



.form-header button.active {

  background-color: #007bff;

  color: #fff;

}



form {

  display: flex;

  flex-direction: column;

}



form input {

  padding: 15px;

  margin: 10px 0;

  border: 1px solid #ccc;

  border-radius: 5px;

}



.forgot-password {

  align-self: flex-end;

  margin-bottom: 10px;

  color: #007bff;

  text-decoration: none;

}



.form-button {

  padding: 15px;

  background-color: #007bff;

  color: #fff;

  border: none;

  border-radius: 5px;

  cursor: pointer;

  transition: background-color 0.3s;

}



.form-button:hover {

  background-color: #0056b3;

}



form p {

  margin-top: 10px;

}



form p a {

  color: #007bff;

  text-decoration: none;

}



@keyframes fadeIn {

  from {

    opacity: 0;

    transform: translateY(-20px);

  }

  to {

    opacity: 1;

    transform: translateY(0);

  }

}

</style>



<script>

export default {

  data() {

    return {

      isUser: true,

      isLogin: true

    };

  },

  created() {

    document.title = 'Welcome to NCP ML-Facility';

  }

};

</script>
