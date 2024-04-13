<template>
  <Nav :light="lightTheme"/>

  <Header @changeTheme="theme" :light="lightTheme"/>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'Home Page',
  components: {
    Nav,
    Header
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

</style>