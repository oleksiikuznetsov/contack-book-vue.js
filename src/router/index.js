import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ContactPage from "../views/ContactPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: Home,
    component: Home
  },
  {
    path: "/:name",
    name: "ContactPage",
    component: ContactPage
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
