import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
// import Home from "../views/Home.vue";
// import ContactInfo from "../views/ContactInfo.vue"
import ContactPage from "../views/ContactPage.vue";
// import ListContacts from "../components/ListContacts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: Home,
    component: Home
  },
  // {
  //   path: "/home",
  //   name: "Home",
  //   component: Home
  // },
  {
    path: "/:name",
    name: "ContactPage",
    component: ContactPage
  },
  // {
  //   path: ":id",
  //   name: "ContactInfo",
  //   component: ContactInfo
  // },
  // {
  //   path: "/contact-info/",
  //   name: "ContactInfo",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function() {
  //     return import(/* webpackChunkName: "about" */ "../views/ContactInfo.vue");
  //   }
  // },

];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
