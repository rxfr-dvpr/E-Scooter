<template>
  <Nav :light="lightTheme"/>

  <Header @changeTheme="theme" :light="lightTheme"/>

  <main class="main">
    <Performance :light="lightTheme"/>

    <Banner :light="lightTheme"/>

    <Appearance :light="lightTheme"/>

    <Safety :light="lightTheme"/>

    <Application :light="lightTheme"/>

    <About :light="lightTheme"/>

    <FAQ :light="lightTheme"/>

    <Reviews :light="lighTheme"/>
  </main>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Header from '@/components/Header.vue';
import Performance from '@/components/Performance.vue';
import Banner from '@/components/Banner.vue';
import Appearance from '@/components/Appearance.vue';
import Safety from '@/components/Safety.vue';
import Application from '@/components/Application.vue';
import About from '@/components/About.vue';
import FAQ from '@/components/FAQ.vue';
import Reviews from '@/components/Reviews.vue';

export default {
  name: 'Home Page',
  components: {
    Nav,
    Header,
    Performance,
    Banner,
    Appearance,
    Safety,
    Application,
    About,
    FAQ,
    Reviews
  },
  data() {
    return {
      lightTheme: false
    }
  },
  methods: {
    theme() {
      this.lightTheme = !this.lightTheme

      document.querySelector('body').classList.toggle('light')
    }
  }
}

</script>

<style lang="scss" scoped>

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 120px;
  padding-top: 200px;
}

</style>