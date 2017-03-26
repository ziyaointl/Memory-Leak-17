<template>
  <div id="app">

    <div class="modal" id="signUpModal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              报名
            </p>
          </header>
          <div class="card-content is-clearfix">
            <div class="content">
              <p>
                报名通道暂时还没有开启。如果您对这个会议感兴趣，我们诚恳地邀请您留下您的邮箱。我们会在报名通道开放的第一时间通知您。
              </p>
              <p>
                (我还需要捣鼓一下MailGun，现在邮件服务暂时无法使用)
              </p>

              <form action="//surge.us15.list-manage.com/subscribe/post?u=848a97679ebd15de76689a207&amp;id=8abf1c54b9" method="post" id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div id="field has-addons is-grouped">
                  <p class="control has-icon is-expanded">
                    <input class="input" type="email" placeholder="Email" name="EMAIL" id="mce-EMAIL">
                    <span class="icon is-small">
                    <i class="fa fa-envelope"></i>
                    </span>
                  </p>
                  <p class="control">
                    <input type="submit" value="提交" name="subscribe" id="mc-embedded-subscribe" class="button is-primary is-pulled-right">
                  </p>
                </div>
              </form>

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
              <a class="nav-item is-tab">主页</a>
              <a class="nav-item is-tab">关于</a>
              <a class="nav-item is-tab">合作伙伴</a>
              <a class="nav-item is-tab">日程</a>
            </div>
          </nav>
        </div>
      </div>


      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 id="large-logo"><span id="io">I/O</span> Exception <span id="year">17</span></h1>
          <h2 class="sub-info">山东 济南</h2>
          <h2 class="sub-info">2017年8月9日</h2>
          <a class="button is-primary is-outlined" @click="clickedSignUp">报名</a>
        </div>
      </div>
    </section>

    <hr>

    <div class="container content section">
      <div class="columns is-mobile">
        <div class="column is-8-desktop is-offset-2-desktop is-8-tablet is-offset-2-tablet">

          <h1 class="has-text-centered section-title">关于</h1>
          <p class="justified">
            I/O Exception是一个为青少年开发者举办的、由青少年开发者发起的非营利性的会议。我们的目标是为学生开发者们提供一个认识彼此、交流想法、项目合作的平台。
          </p>
          <p>
            报名通道暂时还没有开启。如果您对这个会议感兴趣，我们诚恳地邀请您留下您的邮箱。我们会在报名通道开放的第一时间通知您。
          </p>

        </div>
      </div>
    </div>

    <hr>

    <div class="container content section">
      <div class="columns is-mobile">
        <div class="column has-text-centered">
          <h1 class="section-title">合作伙伴</h1>
          <figure class="image is-128x128 centered">
            <img src="./assets/power-unity.jpg" alt="Power-Unity">
          </figure>
        </div>
      </div>
    </div>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>暂时不知道在footer里面写点啥好:p</p>
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