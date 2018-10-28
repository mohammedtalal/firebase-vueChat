import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
// Required for side-effects
require("firebase/firestore");

var config = {
    apiKey: "AIzaSyBVbL9lyGFaYAf2cMcruSKvQngwfHoPsYo",
    authDomain: "vuechat-8b161.firebaseapp.com",
    databaseURL: "https://vuechat-8b161.firebaseio.com",
    projectId: "vuechat-8b161",
    storageBucket: "vuechat-8b161.appspot.com",
    messagingSenderId: "734615137203"
  };
  firebase.initializeApp(config);

  // Initialize Cloud Firestore through Firebase
	var db = firebase.firestore();
	window.db = db;

	// Disable deprecated features
	db.settings({
	  timestampsInSnapshots: true
	});

	Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
