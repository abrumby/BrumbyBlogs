import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from './firebase/firebaseInit'
import Vue2Editor from "vue2-editor";

createApp(App).use(store, Vue2Editor, firebase).use(router).mount('#app')
