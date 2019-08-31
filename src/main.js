import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'
import dateFilter from '@/filters/date.filter'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)

Vue.filter('date', dateFilter)

const firebaseConfig = {
  apiKey: "AIzaSyCc4uGV0rlLc7lw7YloeGcZ4t3kenxhHok",
  authDomain: "vuecrm-4941d.firebaseapp.com",
  databaseURL: "https://vuecrm-4941d.firebaseio.com",
  projectId: "vuecrm-4941d",
  storageBucket: "",
  messagingSenderId: "831551877773",
  appId: "1:831551877773:web:7a1daa7885216c22"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})