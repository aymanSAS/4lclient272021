import Vue from "vue";
// import UserService from "../services/user.service";
// import socketio from 'socket.io';
// import VueSocketIO from 'vue-socket.io';
//

//
import App from "./App.vue";
import { router } from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VeeValidate from "vee-validate";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./filters";
import "./directives";
//
import jsPDF from 'jspdf'
import 'jspdf-autotable'
//
import { Bar } from 'vue-chartjs'
export default {
  extends: Bar,
  mounted () {
    this.renderChart(data, options)
  }
}

///

import IdleVue from "idle-vue";

const eventsHub = new Vue();




library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);

Vue.config.productionTip = false;

Vue.use(VeeValidate);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  store,
  idleTime: 3000, // 3 seconds,
  startAtIdle: false
});
//const SocketInstance = socketio('http://192.168.1.8:3000');

//Vue.use(VueSocketIO, SocketInstance);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
// beforeDestroy() {
//   // this.vergeApp.unload()
//   this.vue.dispose()
// }
//by ay
axios.interceptors.response.use(
  response=>{
    return response;
  }
)




