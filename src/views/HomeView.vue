<template>
  <Nav :light="lightTheme"/>

  <Header @changeTheme="theme" :light="lightTheme"/>

  <main class="main">
    <Performance :light="lightTheme"/>

    <Banner :light="lightTheme"/>

    <Appearance :light="lightTheme"/>
  </main>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Header from '@/components/Header.vue';
import Performance from '@/components/Performance.vue';
import Banner from '@/components/Banner.vue';
import Appearance from '@/components/Appearance.vue';

export default {
  name: 'Home Page',
  components: {
    Nav,
    Header,
    Performance,
    Banner,
    Appearance
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