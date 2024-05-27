<template>

  <div class="container">

    <h1>About Us</h1>

    <p>

      The National Center for Physics (NCP) is a premier research institution dedicated to advancing scientific knowledge in the field of physics. Founded in [year], NCP has been at the forefront of cutting-edge research, collaboration, and education in physics.

    </p>

    <p>

      Our mission is to conduct high-quality research that contributes to the global scientific community, fosters innovation, and promotes the development of scientific talent in Pakistan and beyond.

    </p>

    <p>

      At NCP, we are committed to excellence in research across various domains of physics, including theoretical and experimental physics, condensed matter physics, astrophysics, particle physics, and interdisciplinary studies.

    </p>

    <p>

      Through our research programs, academic initiatives, and outreach activities, we strive to inspire the next generation of physicists, nurture interdisciplinary collaborations, and address some of the most pressing challenges facing humanity.

    </p>

    <p>

      We welcome collaboration and engagement from scientists, researchers, students, and institutions worldwide who share our passion for advancing knowledge and making a positive impact through the pursuit of physics.

    </p>

  </div>

</template>



<script>

export default {

  name: 'AboutUsPage'

};

</script>



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

  max-width: 800px;

  margin: 0 auto;

  padding: 40px;

  background: rgba(255, 255, 255, 0.9);

  border-radius: 10px;

  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  animation: fadeIn 1s ease-in-out;

}



h1 {

  font-family: 'Roboto', sans-serif;

  font-weight: 700;

  font-size: 36px;

  margin-bottom: 20px;

  color: #333;

  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  text-align: center;

}



p {

  font-size: 18px;

  line-height: 1.8;

  margin-bottom: 30px;

  color: #555;

  text-align: justify;

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
