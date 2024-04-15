<template>
  <Nav :light="lightTheme"/>

  <Header @changeTheme="theme" :light="lightTheme"/>

  <main class="main">
    <Performance/>
  </main>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Header from '@/components/Header.vue';
import Performance from '@/components/Performance.vue';

export default {
  name: 'Home Page',
  components: {
    Nav,
    Header,
    Performance
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