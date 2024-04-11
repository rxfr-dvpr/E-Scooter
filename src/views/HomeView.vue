<template>
  <section class="home-page">
    <div class="container">
      <div class="row">
        <p>E-Scooter Soon...</p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Home Page'
}

</script>

<style lang="scss" scoped>

.home-page {
  width: 100%;
  height: 100vh;

  .row {
    justify-items: center;
    align-items: center;

    p {
      width: 100%;
      font-size: 35px;
      font-weight: 600;
      text-align: center;
    }
  }
}


</style>