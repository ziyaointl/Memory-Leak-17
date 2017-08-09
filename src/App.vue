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
                报名通道暂时还没有开启。如果你对这个会议感兴趣，我们诚恳地邀请你留下邮箱。我们会在报名通道开放的第一时间通知你。
              </p>

              <form action="//surge.us15.list-manage.com/subscribe/post?u=848a97679ebd15de76689a207&amp;id=8abf1c54b9" method="post" id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div class="field has-addons is-grouped">
                  <p class="control has-icon is-expanded">
                    <input class="input" type="email" placeholder="Email" name="EMAIL" id="mce-EMAIL">
                    <span class="icon is-small">
                    <i class="fa fa-envelope"></i>
                    </span>
                  </p>
                  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_848a97679ebd15de76689a207_8abf1c54b9" tabindex="-1" value=""></div>
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

    <section class="hero is-fullheight" id="home">
      <div id="particle-ground"></div>
      <div class="hero-head">
        <div class="container">
          <nav class="nav">
            <div class="nav-left">
              <a class="nav-item">
                <h1 id="small-logo">Memory Leak</h1>
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
              <a class="nav-item is-tab" @click="scrollTo('home')">主页</a>
              <a class="nav-item is-tab" @click="scrollTo('about')">关于</a>
              <a class="nav-item is-tab" @click="scrollTo('schedule')">日程</a>
              <a class="nav-item is-tab" @click="scrollTo('partners')">合作伙伴</a>
              <a class="nav-item is-tab" @click="scrollTo('contact')">联系我们</a>
              <!--<a class="nav-item is-tab">日程</a>-->
            </div>
          </nav>
        </div>
      </div>


      <div class="hero-body">
        <div class="container has-text-centered">
          <!--<h1 class="fade-in" id="large-logo">Memory Leak <span id="year">17</span></h1>-->
          <div><img src="./assets/logo-icon.svg" alt="" class="logo-icon fade-in"></div>
          <img src="./assets/logo-text.svg" alt="" class="fade-in logo-text">
          <h2 class="sub-info fade-in">山东 济南 经十路14668</h2>
          <h2 class="sub-info fade-in">2017年8月9日</h2>
          <!-- <a class="button is-primary is-outlined fade-in" @click="clickedSignUp">报名</a> -->
          <a class="button is-primary is-outlined fade-in" href="http://www.huodongxing.com/event/4384474886300">报名</a>
        </div>
      </div>
    </section>

    <hr id="hr1">

    <div class="container content section" id="about">
      <div class="columns is-mobile">
        <div class="column is-8-desktop is-offset-2-desktop is-8-tablet is-offset-2-tablet">

          <h1 class="has-text-centered section-title">关于</h1>
          <p class="justified">
            在高中生群体之中，对计算机感兴趣的同学不在少数。然而，由于一些技术的门槛较高，中文资料较为匮乏，在接受大学教育之前，想要写出自己的一个应用并不容易。即使经过了重重困难在高中阶段掌握了一定的技术，多数人也只是局限于独自开发，想要找到能与自己在更大的项目上合作的开发者并非易事。
          </p>
          <p class="justified">
            Memory Leak是一个为青少年开发者举办的、由青少年开发者发起的非营利性的会议。我们的目标是为学生开发者们提供一个认识彼此、交流想法、项目合作的平台。我们希望那些对科技饱含热情的高中生能够有一个机会听取在计算机领域已经有所成就的同龄人的经验，在开发的过程中少走一些弯路，让对科技的热情不因无法入门而退缩，让多人一起实现一个大的项目的梦想成为现实。
          </p>

        </div>
      </div>
    </div>

    <hr>

    <div class="container section" id="schedule">
      <div class="columns">
        <div class="column has-text-centered content">
          <h1 class="section-title">日程</h1>
        </div>
      </div>
      <div class="columns is-mobile">
        <div class="column is-8-desktop is-offset-2-desktop is-8-tablet is-offset-2-tablet" id="timeline">
          <div class="timeline-block" v-for="event in timeline">
            <div class="timeline-img">
              <div class="box">
                <i :class="'fa fa-fw ' + event.icon"></i>
              </div>
            </div>

            <div class="timeline-content box">
              <h2 class="speech-title">{{ event.title }}</h2>
              <p class="speech-author">{{ event.author }}</p>
              <span class="speech-time">{{ event.time }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr>

    <div class="container content section" id="partners">
      <div class="columns is-mobile">
        <div class="column has-text-centered">
          <h1 class="section-title">合作伙伴</h1>
          <figure class="image is-128x128 centered">
            <img src="./assets/power-unity.jpg" alt="Power-Unity" class="round-corners">
          </figure>
          <p id="pu-text">PowerUnity 社</p>
        </div>
      </div>
    </div>

    <hr>

    <div class="container content section" id="contact">
      <div class="columns is-mobile">
        <div class="column has-text-centered">
          <h1 class="section-title">联系我们</h1>
          <p>
            QQ群:
            <a href="mailto:developer@mleak.org">458546584</a>
          </p>
          <p>
            Email:
            <a href="mailto:developer@mleak.org">developer@mleak.org</a>
          </p>
        </div>
      </div>
    </div>

    <footer class="footer">
      <div class="container">
        <div class="has-text-centered">
          <a href="https://github.com/ziyaointl/Memory-Leak-17" class="icon is-medium">
            <i class="fa fa-github" aria-hidden="true" id="github"></i>
          </a>
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
        menuActive: false,
        fadeLoaded: false,
        timeline: [
          {
            title: "入场",
            author: "",
            time: "8:00",
            icon: "fa-map-marker"
          },
          {
            title: "开幕式",
            author: "",
            time: "9:00",
            icon: "fa-bank"
          },
          {
            title: "编程技术居然可以用来做作业",
            author: "我是如何 hack 安全教育平台的",
            time: "9:15",
            icon: "fa-microphone"
          },
          {
            title: "茶歇",
            author: "",
            time: "9:45",
            icon: "fa-coffee"
          },
          {
            title: "你也能为自己的学校开发网站",
            author: "前端框架的对比与应用",
            time: "10:00",
            icon: "fa-microphone"
          },
          {
            title: "小组讨论",
            author: "",
            time: "10:45",
            icon: "fa-comments"
          },
          {
            title: "成果分享",
            author: "",
            time: "11:15",
            icon: "fa-street-view"
          },
          {
            title: "主讲人点评",
            author: "",
            time: "11:45",
            icon: "fa-user"
          },
          {
            title: "午餐",
            author: "",
            time: "12:00",
            icon: "fa-cutlery"
          },
          {
            title: "怎样用机器人获得9万赞助",
            author: "FTC中国最高奖项得主教你精通机器人的秘诀",
            time: "13:30",
            icon: "fa-microphone"
          },
          {
            title: "VPN被封了，出国党该咋办",
            author: "学长带你玩转国外网站",
            time: "14:10",
            icon: "fa-microphone"
          },
          {
            title: "茶歇",
            author: "",
            time: "14:30",
            icon: "fa-coffee"
          },
          {
            title: "小组讨论",
            author: "",
            time: "14:45",
            icon: "fa-comments"
          },
          {
            title: "成果分享",
            author: "",
            time: "15:15",
            icon: "fa-street-view"
          },
          {
            title: "主讲人点评",
            author: "",
            time: "15:45",
            icon: "fa-user"
          },
          {
            title: "闭幕式",
            author: "",
            time: "16:00",
            icon: "fa-bank"
          }
        ]
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
      },
      handleVisibilityChange() {
        if (!document.hidden) {
          this.fadeInTitle();
        }
      },
      fadeInTitle() {
        if (!this.fadeLoaded) {
          window.Velocity(document.getElementsByClassName('fade-in'), "transition.slideUpIn", {
            stagger: 300
          });
          this.fadeLoaded = true
        }
      },
      scrollTo(id) {
        let element = document.getElementById(id);
        window.Velocity(element, "scroll", {
          duration: 500,
          easing: "ease-in-out"
        });
      },
      closeModals() {
        this.closeSignUp();
      }
    },
    mounted() {
      if (!document.hidden) {
        this.fadeInTitle();
      }
      document.addEventListener("visibilitychange", this.handleVisibilityChange);
    },
    created() {
      let vm = this;
      window.addEventListener('keyup', function(e) {
        if (e.keyCode === 27) {
          vm.closeModals();
        }
      });
    }
  }
</script>

<style lang="scss">
  @import "css/styles.scss";
</style>
