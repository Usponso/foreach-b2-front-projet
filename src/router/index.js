import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue"),
  },
  {
    path: "/pokemons",
    name: "Pokemons",
    component: () => import("../views/AllPokemons.vue"),
  },
  {
    path: "/pokemons/:name",
    component: () => import("../views/Pokemon.vue"),
  },
  {
    path: "/favoris",
    component: () => import("../views/Favoris.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
