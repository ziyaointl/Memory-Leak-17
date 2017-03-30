import Vue from 'vue';
import App from './App.vue';
import Event from './components/Event.vue';

new Vue({
  el: '#app',
  render: h => h(App)
});

require('./assets/power-unity.jpg');
require('./assets/jquery.particleground.min');

window.onload = function() {
  particleground(document.getElementById('particle-ground'), {
    dotColor: '#f2f2f2',
    lineColor: '#f2f2f2',
    density: 8000
  });

  window.Velocity(document.getElementsByClassName('fade-in'), "transition.slideUpIn", {stagger: 250});
}