<template>
  <div id="app">
    <navigation></navigation>
    <page></page>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navigation from './layout/Navigation';
import Page from './layout/Page';
export default {
  name: 'app',
  components: {
    Navigation,
    Page
  },
  mounted() {
    AOS.init();
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';

#app {
  background: $theme-color;
  display: block;
  position: relative;
  min-height: 100vh;
  width: 100%;
  padding: .5rem;
  @include breakpoint-min(lg) {
    padding: 1.5rem
  }
  // Fix this later
  // &::before {
  //   content: '';
  //   display: block;
  //   position: fixed;
  //   left: 0;
  //   top: 0;
  //   height: 100%;
  //   width: 100%;
  //   border: .5rem solid $theme-color;
  //   border-bottom-width: 0;
  //   z-index: 10;
  //   background: transparent;
  //   pointer-events: none;
  //   user-select: none;
  //   box-sizing: border-box;
  //   @include breakpoint-min(md) {
  //     border: 0;
  //   }
  // }
}

</style>