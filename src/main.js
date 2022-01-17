import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.use(Antd);

import less from "less";
Vue.use(less);

import VideoPlayer from "vue-video-player";
import "vue-video-player/src/custom-theme.css";
import "video.js/dist/video-js.css";
Vue.use(VideoPlayer);

// import particles from "particles.js";
// Vue.use(particles);

import VueParticles from "vue-particles";
Vue.use(VueParticles);

import audio from "vue-mobile-audio";
Vue.use(audio);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
