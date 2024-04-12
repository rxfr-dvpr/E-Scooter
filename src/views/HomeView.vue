<template>
  <Nav/>
  
  <section class="home-page">
    <div class="container">
      <div class="row">
        <p>E-Scooter Soon...</p>

        <button class="theme-btn all-btn" @click="changeTheme">Change theme</button>
      </div>
    </div>
  </section>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
  name: 'Home Page',
  components: {
    Nav
  },
  methods: {
    changeTheme() {
      const body = document.querySelector('body');
      
      body.classList.toggle('light')
    }
  }
}

</script>

<style lang="scss" scoped>

.home-page {
  width: 100%;
  height: 100vh;

  .row {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    row-gap: 35px;

    p {
      width: 100%;
      font-size: 35px;
      font-weight: 600;
      text-align: center;
    }
  }
}


</style>