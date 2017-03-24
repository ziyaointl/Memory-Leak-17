<template>
  <div id="app">

    <section class="hero is-medium">
      <div class="hero-head">
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


      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 id="large-logo"><span id="io">I/O</span> Exception <span id="year">17</span></h1>
          <h2 class="subtitle">Shandong Jinan</h2>
          <h2 class="subtitle">August 9, 2017</h2>
        </div>
      </div>
    </section>

    <hr>

    <div class="container content">
      <div class="columns is-mobile">
        <div class="column is-8-desktop is-offset-2-desktop is-8-tablet is-offset-2-tablet">

          <h1>About</h1>
          <p>
            I/O Exception is a non-proft tech conference hosted for young developers, by young developers. The goal of this conference
            is to establish a platform where student developers can meet each other, share their ideas, and collaborate on
            programming projects.
          </p>
          <p>
            Signup portal is not yet open. To receive the latest updates, please subscribe to our mailing list.
          </p>

        </div>
      </div>
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