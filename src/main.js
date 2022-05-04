import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "./firebase/firebaseInit";
import Vue2Editor from "vue2-editor";
import Vuex from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPen,
  faTrash,
  faUser,
  faRightFromBracket,
  faBars,
  faCircleRight,
  faEnvelope,
  faLock,
  faCircleXmark,
  faCogs,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "@/index.css";
import { auth } from "@/firebase/firebaseInit";

library.add(
  faPen,
  faTrash,
  faUser,
  faRightFromBracket,
  faLinkedin,
  faInstagram,
  faGithub,
  faTwitter,
  faBars,
  faCircleRight,
  faEnvelope,
  faLock,
  faCircleXmark,
  faCogs,
  faPlus
);
let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(store, Vue2Editor, firebase).use(router, Vuex).mount("#app");
  }
});
