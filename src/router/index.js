import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TV from "../views/TV.vue";
import Profile from "../views/Profile.vue";
import MoviePage from "../components/PopularMovie/MoviePage";
import ShowPage from "../components/Tv/ShowPage";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/TV",
    name: "TV",
    component: TV,
  },
  {
    path: "/Profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/MoviePage/:id",
    name: "MoviePage",
    component: MoviePage,
    props: true,
  },
  {
    path: "/ShowPage/:id",
    name: "ShowPage",
    component: ShowPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
