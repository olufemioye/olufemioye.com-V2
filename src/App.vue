<template>
  <div id="app">
    <navigation></navigation>
    <page></page>
  </div>
</template>

<script>
import Navigation from './layout/Navigation';
import Page from './layout/Page';
export default {
  name: 'app',
  components: {
    Navigation,
    Page
  }
  
}
</script>

<style lang="scss">
@import './scss/main.scss';

#app {
  background: $theme-color;
  display: block;
  min-height: 100vh;
  width: 100%;
  padding: .5rem;
}

</style>