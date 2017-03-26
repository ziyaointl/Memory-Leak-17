<template>
  <div id="app">

    <div class="modal" id="signUpModal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Sign Up
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <p>
                Signup portal is not yet open. To receive the latest updates, please subscribe to our mailing list.
              </p>
              <p>
                (I still need to hook up MailGun, so the submit button does nothing as of yet)
              </p>
              <div class="field has-addons">
                <p class="control has-icon is-expanded">
                  <input class="input" type="email" placeholder="Email">
                  <span class="icon is-small">
                  <i class="fa fa-envelope"></i>
                  </span>
                </p>
                <p class="control">
                  <a class="button is-primary">
                    Submit
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="modal-close" @click="closeSignUp"></button>
    </div>

    <section class="hero is-fullheight">
      <div class="hero-head">
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
              <a class="nav-item is-tab">Home</a>
              <a class="nav-item is-tab">Schedule</a>
              <a class="nav-item is-tab">About</a>
            </div>
          </nav>
        </div>
      </div>


      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 id="large-logo"><span id="io">I/O</span> Exception <span id="year">17</span></h1>
          <h2 class="sub-info">Jinan, Shandong</h2>
          <h2 class="sub-info">August 9, 2017</h2>
          <a class="button is-primary is-outlined" @click="clickedSignUp">Sign Up</a>
        </div>
      </div>
    </section>

    <hr>

    <div class="container content section">
      <div class="columns is-mobile">
        <div class="column is-8-desktop is-offset-2-desktop is-8-tablet is-offset-2-tablet">

          <h1 class="has-text-centered section-title">About</h1>
          <p class="justified">
            I/O Exception is a non-profit tech conference hosted for young developers, by young developers. The goal of this conference
            is to establish a platform where student developers can meet each other, share their ideas, and collaborate on
            programming projects.
          </p>
          <p>
            Signup portal is not yet open. To receive the latest updates, please subscribe to our mailing list.
          </p>

        </div>
      </div>
    </div>

    <hr>

    <div class="container content section">
      <div class="columns is-mobile">
        <div class="column has-text-centered">
          <h1 class="section-title">Sponsors</h1>
          <figure class="image is-128x128 centered">
            <img src="./assets/power-unity.jpg" alt="Power-Unity">
          </figure>
        </div>
      </div>
    </div>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>Not sure what to put in the footer yet :p</p>
        </div>
      </div>
    </footer>

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
      },
      clickedSignUp() {
        let element = document.getElementById("signUpModal");
        element.classList.add("is-active");
      },
      closeSignUp() {
        let element = document.getElementById("signUpModal");
        element.classList.remove("is-active");
      }
    }
  }
</script>

<style lang="scss">
  @import "css/styles.scss";
</style>