<template>
  <div id="app">
    <div class="container">
    <nav class="nav">
      <div class="nav-left">
        <a class="nav-item">
          <h1 id="small-logo">I/O Exception</h1>
        </a>
      </div>

      <!--Toggle button, only visible on mobile-->
      <span class="nav-toggle" @click="toggleMenu" v-bind:class="{ 'is-active': menuActive }">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <!-- nav-menu is hidden on mobile -->
      <div class="nav-right nav-menu" v-bind:class="{ 'is-active': menuActive }">
        <a class="nav-item">Home</a>
        <a class="nav-item">Schedule</a>
        <a class="nav-item">About</a>
      </div>
    </nav>
    </div>


    <div class="container has-text-centered">
      <h1 id="large-logo"><span id="io">I/O</span> Exception <span id="year">17</span></h1>
      <h2 class="subtitle">Shandong Jinan</h2>
      <h2 class="subtitle">August 9, 2017</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        menuActive: false
      }
    },
    methods: {
      toggleMenu() {
        this.menuActive = !this.menuActive;
      }
    }
  }
</script>

<style lang="scss">
  @import "node_modules/bulma/sass/utilities/_all.sass";
  @import "node_modules/bulma/sass/base/_all.sass";
  @import "node_modules/bulma/sass/layout/_all.sass";
  @import "node_modules/bulma/sass/elements/_all.sass";
  @import "node_modules/bulma/sass/grid/_all.sass";
  @import "node_modules/bulma/sass/components/_all.sass";
  @import "css/styles.scss";
</style>