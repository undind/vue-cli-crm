import Vue from "vue";
import Vuelidate from "vuelidate";
import Paginate from "vuejs-paginate";
import VueMeta from "vue-meta";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter";
import currencyFilter from "@/filters/currency.filters";
import localizeFilter from "@/filters/localize.filter";
import tooltipDirective from "@/directives/tooltip.directive";
import messagePlugin from "@/utils/message.plugin.js";
import titlePlugin from "@/utils/title.plugin.js";
import Loader from "@/components/Loader.vue";
import "materialize-css/dist/js/materialize.min.js";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(titlePlugin);
Vue.use(Vuelidate);
Vue.use(VueMeta);
Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.filter("localize", localizeFilter);
Vue.directive("tooltip", tooltipDirective);
Vue.component("Loader", Loader);
Vue.component("paginate", Paginate);

firebase.initializeApp({
  apiKey: "AIzaSyAge2f8RH2XsEXWACI03G7RYwq2D2i8NVU",
  authDomain: "crm-vue-project.firebaseapp.com",
  databaseURL: "https://crm-vue-project.firebaseio.com",
  projectId: "crm-vue-project",
  storageBucket: "crm-vue-project.appspot.com",
  messagingSenderId: "254968182249",
  appId: "1:254968182249:web:552c577b76bdbf1ed08778",
  measurementId: "G-33Z7WRYTMW"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
